
'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SocialIcon, SocialPlatform } from '@/components/shared/social-icon'
import { Trash2, Sparkles, Loader2 } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { generateJobDetails } from '@/ai/flows/generate-job-details-flow'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const socialPlatforms: SocialPlatform[] = [
  'YouTube', 'Instagram', 'X', 'Twitch', 'Discord', 'Facebook', 'LinkedIn', 'TikTok'
];

const postJobSchema = z.object({
  title: z.string().min(5, 'Job title must be at least 5 characters.'),
  platform: z.enum(socialPlatforms, { required_error: 'Please select a platform.' }),
  location: z.string().min(2, 'Location is required.'),
  isRemote: z.boolean().default(false),
  jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance']),
  salaryMin: z.coerce.number().min(0, 'Minimum salary must be positive.'),
  salaryMax: z.coerce.number().min(0, 'Maximum salary must be positive.'),
  description: z.string().min(50, 'Description must be at least 50 characters.'),
  requirements: z.array(z.object({ value: z.string().min(1, 'Requirement cannot be empty.') })).min(1, 'At least one requirement is needed.'),
  responsibilities: z.array(z.object({ value: z.string().min(1, 'Responsibility cannot be empty.') })).min(1, 'At least one responsibility is needed.'),
  companyName: z.string().min(2, "Company name is required."),
  companyWebsite: z.string().url("Please enter a valid URL."),
});

type PostJobFormValues = z.infer<typeof postJobSchema>

export default function PostJobPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<PostJobFormValues>({
    resolver: zodResolver(postJobSchema),
    defaultValues: {
      isRemote: false,
      requirements: [{ value: '' }],
      responsibilities: [{ value: '' }],
    },
  });

  const { fields: reqFields, append: appendReq, remove: removeReq, replace: replaceReq } = useFieldArray({
    control: form.control,
    name: "requirements",
  });

  const { fields: respFields, append: appendResp, remove: removeResp, replace: replaceResp } = useFieldArray({
    control: form.control,
    name: "responsibilities",
  });

  const handleGenerateDetails = async () => {
    const { title, companyName, platform, jobType } = form.getValues();
    if (!title || !companyName || !platform || !jobType) {
        toast({
            variant: 'destructive',
            title: 'Missing Information',
            description: 'Please fill out the Title, Company Name, Platform, and Job Type before generating.',
        });
        return;
    }

    setIsGenerating(true);
    try {
        const result = await generateJobDetails({ title, companyName, platform, jobType });
        if (result.description) {
            form.setValue('description', result.description, { shouldValidate: true });
        }
        if (result.responsibilities && result.responsibilities.length > 0) {
            replaceResp(result.responsibilities.map(value => ({ value })));
        }
        if (result.requirements && result.requirements.length > 0) {
            replaceReq(result.requirements.map(value => ({ value })));
        }
        toast({
            title: 'Content Generated',
            description: 'AI has filled in the job details for you.',
        });
    } catch (error) {
        console.error('AI generation failed', error);
        toast({
            variant: 'destructive',
            title: 'Generation Failed',
            description: 'There was an error generating the job details.',
        });
    } finally {
        setIsGenerating(false);
    }
  }


  function onSubmit(data: PostJobFormValues) {
    console.log(data);
    // Here you would typically send the data to your backend/Firebase
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold font-headline">Post a New Job</h1>
        <p className="text-muted-foreground">Fill in the details below to find your next great hire.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Start with the essential details about the role.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Senior Video Editor" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                        control={form.control}
                        name="platform"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Platform</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a platform" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {socialPlatforms.map(platform => (
                                    <SelectItem key={platform} value={platform}>
                                        <div className="flex items-center gap-2">
                                            <SocialIcon platform={platform} className="h-5 w-5" />
                                            <span>{platform}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                            control={form.control}
                            name="jobType"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Job Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select job type" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Full-time">Full-time</SelectItem>
                                        <SelectItem value="Part-time">Part-time</SelectItem>
                                        <SelectItem value="Contract">Contract</SelectItem>
                                        <SelectItem value="Freelance">Freelance</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Location & Salary</CardTitle>
                    <CardDescription>Provide compensation and location details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., New York, NY" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isRemote"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 mt-2">
                                    <div className="space-y-0.5">
                                        <FormLabel>Remote Option</FormLabel>
                                        <FormDescription>Is this role fully remote?</FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                     </div>
                     <div className="grid sm:grid-cols-2 gap-6 items-end">
                        <FormField
                            control={form.control}
                            name="salaryMin"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Salary Range (USD)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Minimum" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="salaryMax"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="number" placeholder="Maximum" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <div className="flex justify-between items-center">
                        <CardDescription>Describe the role, responsibilities, and requirements.</CardDescription>
                        <Button type="button" variant="outline" size="sm" onClick={handleGenerateDetails} disabled={isGenerating}>
                             {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                            Generate with AI
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Provide a detailed description of the job..."
                                className="min-h-[150px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <div>
                        <FormLabel>Responsibilities</FormLabel>
                        <div className="space-y-2 mt-2">
                            {respFields.map((field, index) => (
                                <FormField
                                key={field.id}
                                control={form.control}
                                name={`responsibilities.${index}.value`}
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                    <FormControl>
                                        <Input {...field} placeholder={`Responsibility #${index + 1}`} />
                                    </FormControl>
                                     <Button type="button" variant="ghost" size="icon" onClick={() => removeResp(index)} disabled={respFields.length <= 1}>
                                        <Trash2 className="h-4 w-4" />
                                     </Button>
                                    </FormItem>
                                )}
                                />
                            ))}
                        </div>
                        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendResp({ value: "" })}>Add Responsibility</Button>
                    </div>

                     <div>
                        <FormLabel>Requirements</FormLabel>
                        <div className="space-y-2 mt-2">
                            {reqFields.map((field, index) => (
                                <FormField
                                key={field.id}
                                control={form.control}
                                name={`requirements.${index}.value`}
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                    <FormControl>
                                        <Input {...field} placeholder={`Requirement #${index + 1}`} />
                                    </FormControl>
                                     <Button type="button" variant="ghost" size="icon" onClick={() => removeReq(index)} disabled={reqFields.length <= 1}>
                                        <Trash2 className="h-4 w-4" />
                                     </Button>
                                    </FormItem>
                                )}
                                />
                            ))}
                        </div>
                         <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendReq({ value: "" })}>Add Requirement</Button>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>About Your Company</CardTitle>
                    <CardDescription>Tell applicants about your organization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Acme Corporation" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyWebsite"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Company Website</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
                <Button type="button" variant="ghost">Save Draft</Button>
                <Button type="submit" className="bg-primary-gradient">Publish Job</Button>
            </div>
        </form>
      </Form>
    </div>
  )
}
