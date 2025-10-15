
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser } from '@/firebase'
import { SocialIcon, SocialPlatform } from '@/components/shared/social-icon'
import { Upload } from 'lucide-react'

const socialPlatforms: { platform: SocialPlatform; connected: boolean }[] = [
    { platform: 'YouTube', connected: true },
    { platform: 'Instagram', connected: false },
    { platform: 'X', connected: false },
    { platform: 'Twitch', connected: true },
    { platform: 'Discord', connected: false },
    { platform: 'Facebook', connected: true },
    { platform: 'LinkedIn', connected: false },
    { platform: 'TikTok', connected: false },
];

export default function SettingsPage() {
    const { user } = useUser();

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold font-headline">Settings</h1>
                <p className="text-muted-foreground">Manage your account, connections, and notification settings.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Update your public profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                            <AvatarFallback className="text-2xl">{user?.displayName?.charAt(0) || 'U'}</AvatarFallback>
                        </Avatar>
                        <div className='space-y-2'>
                             <Button variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Change Photo
                            </Button>
                            <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="displayName">Display Name</Label>
                            <Input id="displayName" defaultValue={user?.displayName || ''} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue={user?.email || ''} disabled />
                        </div>
                    </div>
                     <Button className="bg-primary-gradient">Save Changes</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Connected Accounts</CardTitle>
                    <CardDescription>Connect your social media accounts to showcase on your profile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {socialPlatforms.map(({ platform, connected }) => (
                        <div key={platform} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <SocialIcon platform={platform} className="h-8 w-8" />
                                <span className="font-semibold text-lg">{platform}</span>
                            </div>
                             <Button variant={connected ? "secondary" : "outline"}>
                                {connected ? 'Disconnect' : 'Connect'}
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications from us.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="new-job-alerts">New Job Alerts</Label>
                                <p className="text-sm text-muted-foreground">Receive emails about jobs that match your profile.</p>
                            </div>
                            <Switch id="new-job-alerts" defaultChecked />
                        </div>
                         <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="application-updates">Application Updates</Label>
                                <p className="text-sm text-muted-foreground">Get notified about the status of your job applications.</p>
                            </div>
                            <Switch id="application-updates" defaultChecked />
                        </div>
                         <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="weekly-newsletter">Weekly Newsletter</Label>
                                <p className="text-sm text-muted-foreground">Our weekly roundup of top jobs and platform news.</p>
                            </div>
                            <Switch id="weekly-newsletter" />
                        </div>
                    </div>
                     <Button className="bg-primary-gradient">Save Preferences</Button>
                </CardContent>
            </Card>

        </div>
    )
}
