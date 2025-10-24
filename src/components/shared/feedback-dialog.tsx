
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send } from 'lucide-react'

interface FeedbackDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FeedbackDialog({ open, onOpenChange }: FeedbackDialogProps) {
  const [feedback, setFeedback] = useState('')
  const { toast } = useToast()

  const handleSubmit = () => {
    if (feedback.trim().length < 10) {
        toast({
            variant: 'destructive',
            title: 'Feedback too short',
            description: 'Please provide at least 10 characters.',
        })
        return
    }
    
    // In a real application, you would send this feedback to your backend.
    console.log('Feedback submitted:', feedback)

    toast({
      title: 'Feedback received!',
      description: "Thank you for helping us improve.",
    })
    
    setFeedback('')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-headline">Submit Feedback</DialogTitle>
          <DialogDescription>
            We'd love to hear your thoughts on what's working and what could be better.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what you think..."
            rows={6}
          />
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-primary-gradient gap-2">
            <Send className="h-4 w-4" />
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
