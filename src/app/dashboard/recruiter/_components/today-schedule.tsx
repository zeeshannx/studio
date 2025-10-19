
'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { scheduleItems as allScheduleItems } from "@/lib/placeholder-data/recruiter"
import { useMemo } from "react"

const timeSlots = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, '0')}:00`);

// Function to convert time string "HH:MM" to minutes from the start of the day (00:00)
const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

// Function to process schedule items to handle overlaps
const processScheduleItems = (items: typeof allScheduleItems) => {
    const sortedItems = [...items].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
    const processedItems: (typeof items[0] & { level: number })[] = [];
    
    // This array keeps track of the end time of the last item on each level
    const levelEndTimes: number[] = [];

    for (const item of sortedItems) {
        const start = timeToMinutes(item.startTime);
        let placed = false;
        // Find the first level where the item does not overlap
        for (let i = 0; i < levelEndTimes.length; i++) {
            if (start >= levelEndTimes[i]) {
                processedItems.push({ ...item, level: i });
                levelEndTimes[i] = timeToMinutes(item.endTime);
                placed = true;
                break;
            }
        }
        // If no available level was found, create a new one
        if (!placed) {
            processedItems.push({ ...item, level: levelEndTimes.length });
            levelEndTimes.push(timeToMinutes(item.endTime));
        }
    }
    return { processedItems, totalLevels: levelEndTimes.length };
};


export function TodaySchedule() {
    const { processedItems, totalLevels } = useMemo(() => processScheduleItems(allScheduleItems), [allScheduleItems]);

    const timeToPosition = (time: string) => {
        const [hour, minute] = time.split(':').map(Number);
        const totalMinutes = (hour - 8) * 60 + minute;
        // 10 hours from 8:00 to 18:00
        return (totalMinutes / (10 * 60)) * 100; 
    };
    
    const scheduleHeight = totalLevels * 96 + 16; // 96px per level (h-24) + 16px padding

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Today schedule</CardTitle>
        </div>
        <Select defaultValue="2025-02-04">
            <SelectTrigger className="w-auto">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="2025-02-04">February 4, 2025</SelectItem>
                <SelectItem value="2025-02-05">February 5, 2025</SelectItem>
            </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <div className="flex justify-between text-xs text-muted-foreground mb-2" style={{ width: '100%' }}>
            {timeSlots.map((time) => <div key={time} className="flex-1 text-center">{time}</div>)}
          </div>
          <div className="relative border-t border-dashed" style={{ height: `${scheduleHeight}px` }}>
            {processedItems.map((item) => {
                const start = timeToPosition(item.startTime);
                const end = timeToPosition(item.endTime);
                const width = end - start;
                
                return (
                    <div
                        key={item.id}
                        className="absolute h-20 rounded-lg bg-muted p-2 flex items-center gap-2 transition-all duration-300"
                        style={{ 
                            left: `${start}%`, 
                            width: `${width}%`,
                            top: `${item.level * 96 + 16}px`, // 96px (h-24) per level + 16px top padding
                        }}
                    >
                         <div className="flex -space-x-2">
                            {item.avatars.map((src, index) => (
                                <Avatar key={index} className="size-8 border-2 border-muted">
                                    <AvatarImage src={src} data-ai-hint="person" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        {item.more > 0 && (
                            <div className="size-8 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                                +{item.more}
                            </div>
                        )}
                        <div className="truncate">
                            <p className="text-sm font-semibold truncate">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.startTime} - {item.endTime}</p>
                        </div>
                         <div className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-1 rounded-full bg-primary" />
                    </div>
                )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
