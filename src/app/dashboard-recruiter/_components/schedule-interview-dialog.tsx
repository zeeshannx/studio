
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { addDays, format, startOfWeek, isSameDay, isBefore } from 'date-fns'
import { cn } from '@/lib/utils'

const timeSlots = [
  '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', 
  '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
]

const generateWeekDays = (start: Date) => {
  return Array.from({ length: 7 }).map((_, i) => addDays(start, i))
}

export function ScheduleInterviewDialog({ applicant, open, onOpenChange }: {
  applicant: {
    id: string;
    name: string;
    appliedFor: string;
    avatarUrl: string;
  },
  open: boolean,
  onOpenChange: (open: boolean) => void,
}) {
  const today = new Date()
  const [weekStart, setWeekStart] = useState(startOfWeek(today, { weekStartsOn: 1 }))
  const [selectedDate, setSelectedDate] = useState<Date>(today)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const weekDays = generateWeekDays(weekStart)

  const handleNextWeek = () => setWeekStart(addDays(weekStart, 7))
  const handlePrevWeek = () => {
    const newWeekStart = addDays(weekStart, -7);
    if (!isBefore(newWeekStart, startOfWeek(today, { weekStartsOn: 1 }))) {
        setWeekStart(newWeekStart);
    }
  }

  const handleDateSelect = (day: Date) => {
    if (isBefore(day, today) && !isSameDay(day, today)) return
    setSelectedDate(day)
    setSelectedTime(null)
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={applicant.avatarUrl} alt={applicant.name} />
              <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-xl">{applicant.name}</DialogTitle>
              <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-400" /> 5 (7 reviews)
                </div>
                <span>&bull;</span>
                <span>{applicant.appliedFor}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" onClick={handlePrevWeek} disabled={isSameDay(weekStart, startOfWeek(today, { weekStartsOn: 1 }))}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="font-semibold text-sm">
                {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'd, yyyy')}
              </div>
              <Button variant="ghost" size="icon" onClick={handleNextWeek}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map(day => {
                const isPast = isBefore(day, today) && !isSameDay(day, today);
                return (
                  <button 
                    key={day.toString()}
                    className={cn(
                        "text-center p-2 rounded-lg transition-colors",
                        isSameDay(day, selectedDate) ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                        isPast ? "text-muted-foreground/50 cursor-not-allowed" : "cursor-pointer"
                    )}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPast}
                  >
                    <p className="text-xs">{format(day, 'E')}</p>
                    <p className="font-bold text-lg">{format(day, 'd')}</p>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
             <h3 className="font-semibold mb-3 text-center">{format(selectedDate, 'EEEE, MMMM d')}</h3>
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map(slot => (
                  <Button 
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    className={cn(selectedTime === slot && "bg-primary-gradient")}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button disabled={!selectedTime} className="bg-primary-gradient">Schedule</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
