
'use client'

import { allTalents } from '@/lib/talent'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { SocialIcon } from '@/components/shared/social-icon'
import { Separator } from '@/components/ui/separator'
import { Check, Link as LinkIcon, Flag, MessageSquare, Briefcase, Info, Mail, Phone, Globe } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

function getTalentByName(name: string) {
  const decodedName = decodeURIComponent(name.replace(/-/g, ' '));
  return allTalents.find(talent => talent.name.toLowerCase() === decodedName.toLowerCase())
}

export default function TalentProfilePage({ params }: { params: { name: string } }) {
  const talent = getTalentByName(params.name)

  if (!talent) {
    notFound()
  }

  const confirmedInfo = [
    { icon: <Mail className="h-4 w-4" />, text: 'Email' },
    { icon: <Phone className="h-4 w-4" />, text: 'Phone' },
    { icon: <Check className="h-4 w-4" />, text: 'ID' },
    { icon: <Globe className="h-4 w-4" />, text: 'Socials' },
  ]
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = [2025, 2024, 2023];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary ring-offset-2 ring-offset-background">
                  <AvatarImage src={talent.src} alt={talent.name} data-ai-hint="person" />
                  <AvatarFallback className="text-3xl">{talent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    {talent.name}
                    {talent.status === 'available' && <div className="size-3 bg-red-500 rounded-full" title="Available"></div>}
                </h1>
                <p className="text-muted-foreground">{talent.role}</p>
                <Button className="mt-4 w-full bg-primary-gradient">Hire Me</Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">{talent.bio}</p>
                {talent.hourlyRate && <p className="font-semibold text-primary">{talent.hourlyRate}/hour personal consultation</p>}
                <Link href="#" className="text-primary text-xs font-semibold">see more</Link>
              </CardContent>
            </Card>

            {talent.roles && talent.roles.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">Roles <Info className="h-4 w-4 text-muted-foreground" /></CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {talent.roles.map(role => <Badge key={role} variant="outline">{role}</Badge>)}
                    </CardContent>
                </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Confirmed Info</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                {confirmedInfo.map(info => (
                    <div key={info.text} className="flex items-center gap-2 text-muted-foreground">
                        {info.icon}
                        <span>{info.text}</span>
                    </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Links</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="icon"><LinkIcon className="h-5 w-5" /></Button>
              </CardContent>
            </Card>

            {talent.experience && talent.experience.length > 0 && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {talent.experience.map((exp, index) => (
                            <div key={index}>
                                <h4 className="font-semibold">{exp.title}</h4>
                                <p className="text-sm text-muted-foreground">{exp.company}</p>
                                <ul className="list-disc pl-5 mt-2 text-xs text-muted-foreground space-y-1">
                                    {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                                <p className="text-xs text-muted-foreground mt-2">{exp.period}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}

            {talent.languageSkills && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Language skills</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Proficient in: {talent.languageSkills.join(', ')}
                    </CardContent>
                </Card>
            )}

            {talent.categories && talent.categories.length > 0 && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {talent.categories.map(cat => <Badge key={cat} variant="secondary">{cat}</Badge>)}
                    </CardContent>
                </Card>
            )}

            <Button variant="outline" className="w-full gap-2">
                <Flag className="h-4 w-4" /> Report this talent
            </Button>
          </aside>

          {/* Right Content */}
          <main className="lg:col-span-2 space-y-8">
            {talent.stats && (
                <Card>
                    <CardContent className="p-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold">{talent.stats.videos} <span className="text-sm text-muted-foreground font-normal">Videos</span></p>
                        </div>
                        <Separator orientation="vertical" className="h-auto" />
                        <div>
                            <p className="text-2xl font-bold">{talent.stats.views} <span className="text-sm text-muted-foreground font-normal">Views</span></p>
                        </div>
                        <Separator orientation="vertical" className="h-auto" />
                        <div>
                            <p className="text-2xl font-bold">{talent.stats.likes} <span className="text-sm text-muted-foreground font-normal">Likes</span></p>
                        </div>
                    </CardContent>
                </Card>
            )}
            
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="clients">Clients</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-6 space-y-8">
                     {talent.portfolio && talent.portfolio.length > 0 && (
                        <Card>
                            <CardHeader><CardTitle>Portfolio</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {talent.portfolio.slice(0,6).map((item, index) => (
                                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                                        <Image src={item.src} alt={item.alt} fill className="object-cover" data-ai-hint={item['data-ai-hint']} />
                                        {item.verified && <Badge className="absolute top-2 left-2">Verified</Badge>}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                    {talent.clients && talent.clients.length > 0 && (
                        <Card>
                            <CardHeader><CardTitle>Verified Clients</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                               {talent.clients.map((client, index) => (
                                   <div key={index} className="flex flex-col items-center text-center gap-2 p-4 rounded-lg border">
                                       <Avatar className="h-16 w-16">
                                            <AvatarImage src={client.logoUrl} alt={client.name} data-ai-hint="logo" />
                                            <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                                       </Avatar>
                                       <p className="font-semibold">{client.name}</p>
                                       <p className="text-sm text-muted-foreground">{client.subscribers} subscribers</p>
                                   </div>
                               ))}
                            </CardContent>
                        </Card>
                    )}

                    {talent.reviews && talent.reviews.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Client Reviews</CardTitle>
                                <CardDescription>{talent.reviews.length} Client Reviews | {talent.vouches} Vouch</CardDescription>
                            </CardHeader>
                             <CardContent className="space-y-4">
                                {talent.reviews.map((review, index) => (
                                    <div key={index} className="p-4 rounded-lg border">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={review.clientLogoUrl} alt={review.clientName} data-ai-hint="logo" />
                                                <AvatarFallback>{review.clientName.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{review.clientName}</p>
                                                <p className="text-xs text-muted-foreground">{review.clientSubscribers} subscribers</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{review.review}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                    
                    {talent.timeline && (
                         <Card>
                            <CardHeader><CardTitle>Timeline</CardTitle></CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                {years.map(year => (
                                    <div key={year} className="flex items-start">
                                        <p className="text-sm font-semibold w-12 pt-1">{year}</p>
                                        <div className="grid grid-cols-12 gap-1 flex-grow">
                                            {months.map((month, monthIndex) => {
                                                const activity = talent.timeline?.[year]?.[month];
                                                const intensity = activity ? Math.min(activity, 4) : 0;
                                                const bgColor = [
                                                    'bg-muted/50',
                                                    'bg-primary/20',
                                                    'bg-primary/40',
                                                    'bg-primary/70',
                                                    'bg-primary'
                                                ][intensity];
                                                return (
                                                    <div key={month} title={`${month} ${year}: ${activity || 0} projects`} className={`aspect-square rounded-sm ${bgColor}`}></div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
                <TabsContent value="portfolio">
                     {talent.portfolio && talent.portfolio.length > 0 && (
                        <Card>
                            <CardHeader><CardTitle>Full Portfolio</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {talent.portfolio.map((item, index) => (
                                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                                        <Image src={item.src} alt={item.alt} fill className="object-cover" data-ai-hint={item['data-ai-hint']} />
                                        {item.verified && <Badge className="absolute top-2 left-2">Verified</Badge>}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
                <TabsContent value="clients">
                    {talent.clients && talent.clients.length > 0 && (
                        <Card>
                            <CardHeader><CardTitle>All Verified Clients</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               {talent.clients.map((client, index) => (
                                   <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                                       <Avatar className="h-16 w-16">
                                            <AvatarImage src={client.logoUrl} alt={client.name} data-ai-hint="logo" />
                                            <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                                       </Avatar>
                                       <div>
                                           <p className="font-semibold">{client.name}</p>
                                           <p className="text-sm text-muted-foreground">{client.subscribers} subscribers</p>
                                       </div>
                                   </div>
                               ))}
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
                 <TabsContent value="timeline">
                      {talent.timeline && (
                         <Card>
                            <CardHeader><CardTitle>Project Timeline</CardTitle></CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                {years.map(year => (
                                    <div key={year} className="flex items-start">
                                        <p className="text-sm font-semibold w-12 pt-1">{year}</p>
                                        <div className="grid grid-cols-12 gap-1 flex-grow">
                                            {months.map((month, monthIndex) => {
                                                const activity = talent.timeline?.[year]?.[month];
                                                const intensity = activity ? Math.min(activity, 4) : 0;
                                                const bgColor = [
                                                    'bg-muted/50',
                                                    'bg-primary/20',
                                                    'bg-primary/40',
                                                    'bg-primary/70',
                                                    'bg-primary'
                                                ][intensity];
                                                return (
                                                    <div key={month} title={`${month} ${year}: ${activity || 0} projects`} className={`aspect-square rounded-sm ${bgColor}`}></div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                                </div>
                                 <div className="flex justify-end items-center gap-2 mt-4 text-xs text-muted-foreground">
                                    <span>Less</span>
                                    <div className="bg-muted/50 h-3 w-3 rounded-sm"></div>
                                    <div className="bg-primary/20 h-3 w-3 rounded-sm"></div>
                                    <div className="bg-primary/40 h-3 w-3 rounded-sm"></div>
                                    <div className="bg-primary/70 h-3 w-3 rounded-sm"></div>
                                    <div className="bg-primary h-3 w-3 rounded-sm"></div>
                                    <span>More</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                 </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

    