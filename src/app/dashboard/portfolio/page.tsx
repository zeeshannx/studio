
'use client'

import {
  MoreVertical,
  Plus,
  ArrowUpDown,
  Youtube,
  Eye,
  Heart,
  Video,
  Verified,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { portfolioItems, clients } from '@/lib/placeholder-data/portfolio'
import React, { useState } from 'react'

const roles = [
  'Video Editor', 'Creative Director', 'Thumbnail Designer', 'Channel Manager', 
  'Content Strategist', 'Scriptwriter', 'Social Media Manager', 'Community Manager',
  'Graphic Designer', 'Podcast Editor', 'Livestream Producer', 'UGC Specialist'
];
const connectionSources = [
  'LinkedIn', 'X (Twitter)', 'Upwork', 'Fiverr'
];

const AddVideoDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Work to Portfolio</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4">
              <X className="h-5 w-5" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="py-4 space-y-6">
          <div className="space-y-2">
            <label htmlFor="work-link" className="text-sm font-medium">Work Link</label>
            <Input id="work-link" placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Description (optional)</label>
            <Textarea id="description" placeholder="e.g. I was working on this project..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Your Role(s)</h4>
              <div className="flex flex-wrap gap-2">
                {roles.map(role => (
                  <Button 
                    key={role} 
                    variant={selectedRoles.includes(role) ? 'default' : 'outline'}
                    onClick={() => toggleSelection(role, selectedRoles, setSelectedRoles)}
                    className="rounded-full"
                  >
                    {role}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">How did you connect with this client?</h4>
              <div className="flex flex-wrap gap-2">
                {connectionSources.map(source => (
                  <Button 
                    key={source} 
                    variant={selectedSources.includes(source) ? 'default' : 'outline'}
                    onClick={() => toggleSelection(source, selectedSources, setSelectedSources)}
                    className="rounded-full"
                  >
                    {source}
                  </Button>
                ))}
                <Button variant="outline" className="rounded-full gap-2">
                  <Plus className="h-4 w-4" /> Add other
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" className="bg-primary-gradient">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


const PortfolioCard = ({ item }: { item: (typeof portfolioItems)[0] }) => {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className="object-cover"
            data-ai-hint="youtube thumbnail"
          />
          <div className="absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {item.verified && (
            <Badge
              variant="secondary"
              className="absolute top-2 left-2 gap-1"
            >
              <Verified className="h-3 w-3 text-primary" />
              Verified
            </Badge>
          )}
          {item.videoUrl && (
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2"
            >
              <Button variant="secondary" size="icon" className="h-7 w-7">
                <Youtube className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
        <div className="p-3">
          <p className="font-semibold text-sm truncate">{item.title}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {item.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {item.likes}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {item.creatorAvatarUrl && (
              <Avatar className="h-5 w-5">
                <AvatarImage src={item.creatorAvatarUrl} data-ai-hint="person" />
                <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <Badge variant="outline">{item.tag}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PortfolioPage() {
  const [isAddVideoOpen, setIsAddVideoOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 space-y-6">
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-headline">Portfolio</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <span className="flex items-center gap-1.5">
                  <Video className="h-4 w-4" />
                  45 VIDEOS
                </span>
                <Separator orientation="vertical" className="h-4" />
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  +310M VIEWS
                </span>
                <Separator orientation="vertical" className="h-4" />
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  +4M LIKES
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-red-600 hover:bg-red-700 text-white border-red-600" onClick={() => setIsAddVideoOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Quick Add
              </Button>
              <Button className="bg-primary-gradient" onClick={() => setIsAddVideoOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add video
              </Button>
            </div>
          </header>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="h-4 w-4" /> Reorder
              </Button>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-md bg-muted">
              <Button size="sm" variant="ghost" className="bg-background shadow-sm">
                All
              </Button>
              <Button size="sm" variant="ghost">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </main>

        <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">{clients.length} Clients</h2>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                              <AvatarImage src={client.avatarUrl} alt={client.name} data-ai-hint="person" />
                              <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                              <p className="font-semibold text-sm">{client.name}</p>
                              <p className="text-xs text-muted-foreground">{client.subscribers}</p>
                          </div>
                      </div>
                      <Button variant="link" className="p-0 h-auto text-primary">Ask</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
      <AddVideoDialog open={isAddVideoOpen} onOpenChange={setIsAddVideoOpen} />
    </>
  )
}
