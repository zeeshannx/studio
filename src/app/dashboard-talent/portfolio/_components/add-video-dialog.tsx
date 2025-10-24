
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

const roles = [
  'Video Editor',
  'Creative Director',
  'Thumbnail Designer',
  'Social Media Manager',
  'Content Strategist',
  'Scriptwriter',
  'Content Producer',
  'Short-form Video Specialist',
  'Community Manager',
]

const connectionSources = ['SocialVerse', 'LinkedIn', 'X (Twitter)', 'Upwork', 'Fiverr', 'Direct', 'Referral']

interface AddVideoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddVideoDialog({ open, onOpenChange }: AddVideoDialogProps) {
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Thumbnail Designer'])

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline">Add Work to Portfolio</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="work-link">Work Link</Label>
            <Input
              id="work-link"
              placeholder="https://www.youtube.com/watch?v=..."
              defaultValue="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Input
              id="description"
              placeholder="e.g. I was responsible for the full edit of this video..."
            />
          </div>

          <div className="space-y-3">
            <Label>Your Role(s)</Label>
            <div className="flex flex-wrap gap-2">
              {roles.map(role => (
                <Button
                  key={role}
                  variant="outline"
                  size="sm"
                  className={cn(
                    'transition-all',
                    selectedRoles.includes(role)
                      ? 'bg-primary/20 border-primary/50 text-primary hover:bg-primary/30'
                      : 'hover:bg-muted'
                  )}
                  onClick={() => toggleRole(role)}
                >
                  {role}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>How did you connect with this client?</Label>
            <div className="flex flex-wrap gap-2">
              {connectionSources.map(source => (
                <Button key={source} variant="outline" size="sm" className="hover:bg-muted">
                  {source}
                </Button>
              ))}
              <Button variant="outline" size="sm" className="gap-2 hover:bg-muted">
                <Plus className="h-4 w-4" /> Add other
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-primary-gradient">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
