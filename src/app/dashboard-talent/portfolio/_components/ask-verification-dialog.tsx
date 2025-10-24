
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Gem, Copy, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface AskVerificationDialogProps {
  client: { name: string; avatarUrl: string; subscribers: string }
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AskVerificationDialog({ client, open, onOpenChange }: AskVerificationDialogProps) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = useState(false)

  // This would be generated dynamically in a real application
  const verificationLink = `https://credable.io/review/29924?client_name=${encodeURIComponent(client.name)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(verificationLink)
      setHasCopied(true)
      setTimeout(() => setHasCopied(false), 2000)
      toast({
        title: 'Copied to clipboard!',
        description: 'You can now share the verification link with your client.',
      })
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Failed to copy',
        description: 'Could not copy the link to your clipboard.',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/20 text-primary p-2 rounded-full">
              <Gem className="h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl font-bold font-headline">Get your Diamond Badge</DialogTitle>
          </div>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <p className="text-muted-foreground">
            Send this link to your client and invite them to confirm your cooperation.
          </p>
          <div className="relative flex items-center">
            <Input
              id="verification-link"
              value={verificationLink}
              readOnly
              className="pr-12 text-primary"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-muted"
              onClick={handleCopy}
            >
              {hasCopied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
