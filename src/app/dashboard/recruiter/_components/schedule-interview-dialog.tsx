
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
  '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM',
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
  const handlePrevWeek = () => setWeekStart(addDays(weekStart, -7))

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

        <div className="py-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="icon" onClick={handlePrevWeek} disabled={isSameDay(weekStart, startOfWeek(today, { weekStartsOn: 1 }))}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="font-semibold">
              {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'MMM d, yyyy')}
            </div>
            <Button variant="ghost" size="icon" onClick={handleNextWeek}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-4">
            {weekDays.map(day => {
              const isPast = isBefore(day, today) && !isSameDay(day, today);
              return (
                <div key={day.toString()} className={cn("p-3 rounded-lg", isSameDay(day, selectedDate) && "bg-muted")}>
                  <button 
                    className={cn("font-semibold text-left w-full", isPast && "text-muted-foreground/50 cursor-not-allowed")}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPast}
                  >
                    {isSameDay(day, today) ? 'Today' : format(day, 'E')}, {format(day, 'MMM d')}
                  </button>
                  {isSameDay(day, selectedDate) && !isPast && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-3">
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
                  )}
                </div>
              )
            })}
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
