
'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Clock, Video } from 'lucide-react'
import type { ScheduleItem } from '@/lib/placeholder-data/recruiter'

export function ScheduleDetailDialog({ item, open, onOpenChange }: {
  item: ScheduleItem,
  open: boolean,
  onOpenChange: (open: boolean) => void,
}) {
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl">{item.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {item.startTime} - {item.endTime}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <h4 className="font-semibold">Attendees</h4>
          <div className="flex -space-x-2 overflow-hidden">
            {item.avatars.map((src, index) => (
                <Avatar key={index} className="size-10 border-2 border-card">
                    <AvatarImage src={src} data-ai-hint="person" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            ))}
            {item.more > 0 && (
                <Avatar className="size-10 border-2 border-card bg-primary text-primary-foreground flex items-center justify-center">
                    <AvatarFallback>+{item.more}</AvatarFallback>
                </Avatar>
            )}
           </div>
        </div>

        <DialogFooter className="sm:justify-start gap-2">
          <Button className="bg-primary-gradient w-full sm:w-auto">
            <Video className="mr-2 h-4 w-4" />
            Join Meeting
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => onOpenChange(false)}>
            Reschedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
