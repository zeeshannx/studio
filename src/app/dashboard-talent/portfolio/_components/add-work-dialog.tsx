
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
import { Plus, X, CloudUpload } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const predefinedRoles = [
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

const connectionSources = ['LinkedIn', 'X (Twitter)', 'Upwork', 'Fiverr', 'Direct', 'Referral']

interface AddWorkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddWorkDialog({ open, onOpenChange }: AddWorkDialogProps) {
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Thumbnail Designer'])
  const [isAddingCustomRole, setIsAddingCustomRole] = useState(false)
  const [customRole, setCustomRole] = useState('')

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    )
  }
  
  const handleCustomRoleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customRole.trim()) {
      e.preventDefault();
      if (!selectedRoles.includes(customRole.trim())) {
        setSelectedRoles(prev => [...prev, customRole.trim()])
      }
      setCustomRole('')
      setIsAddingCustomRole(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline">Add Work to Portfolio</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
            <div className="space-y-2">
                <Label>Upload File</Label>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <CloudUpload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <Separator className="w-full" />
                <span className="absolute px-2 bg-card text-muted-foreground text-sm">OR</span>
            </div>

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
              {predefinedRoles.map(role => (
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
               {selectedRoles.filter(r => !predefinedRoles.includes(r)).map(role => (
                 <Button
                  key={role}
                  variant="outline"
                  size="sm"
                  className={'bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 gap-2'}
                  onClick={() => toggleRole(role)}
                >
                  {role}
                  <X className="h-3 w-3" />
                </Button>
              ))}
              {isAddingCustomRole ? (
                 <Input
                    type="text"
                    placeholder="Enter role and press Enter"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    onKeyDown={handleCustomRoleKeyDown}
                    onBlur={() => setIsAddingCustomRole(false)}
                    className="h-9 w-48"
                    autoFocus
                  />
              ) : (
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-muted"
                    onClick={() => setIsAddingCustomRole(true)}
                >
                    <Plus className="h-4 w-4" /> Add Role
                </Button>
              )}
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
