
'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { generateJobDetails } from '@/ai/flows/generate-job-details-flow'
import { Loader, Wand, X, Plus, Trash2 } from 'lucide-react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { SocialIcon, SocialPlatform } from '@/components/shared/social-icon'
import { allJobs } from '@/lib/placeholder-data/jobs'
import { Switch } from '@/components/ui/switch'

const platforms = [...new Set(allJobs.map(job => job.platform).filter(Boolean))] as SocialPlatform[];
const jobTypes = [...new Set(allJobs.map(job => job.job_time))];

const jobPostSchema = z.object({
  title: z.string().min(3, 'Job title must be at least 3 characters'),
  companyName: z.string().min(2, 'Company name is required'),
  platform: z.string().min(1, 'Platform is required'),
  jobType: z.string().min(1, 'Job type is required'),
  description: z.string().min(50, 'Description should be at least 50 characters'),
  responsibilities: z.array(z.string()).min(1, 'At least one responsibility is required'),
  requirements: z.array(z.string()).min(1, 'At least one requirement is required'),
  compensation: z.string().optional(),
  location: z.string().optional(),
  isRemote: z.boolean(),
  tags: z.array(z.string()),
  customQuestions: z.array(z.object({ text: z.string().min(1, 'Question cannot be empty') })).optional(),
})

type JobPostFormValues = z.infer<typeof jobPostSchema>

export default function PostJobPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [tagInput, setTagInput] = useState('')

  const form = useForm<JobPostFormValues>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      title: '',
      companyName: '',
      platform: '',
      jobType: '',
      description: '',
      responsibilities: [],
      requirements: [],
      isRemote: false,
      tags: [],
      customQuestions: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "customQuestions"
  });

  const handleGenerateDetails = async () => {
    const { title, companyName, platform, jobType } = form.getValues();
    if (!title || !companyName || !platform || !jobType) {
      // You might want to add more specific error handling here
      alert('Please fill in Job Title, Company Name, Platform, and Job Type first.');
      return;
    }

    setIsGenerating(true)
    try {
      const result = await generateJobDetails({ title, companyName, platform, jobType })
      form.setValue('description', result.description)
      form.setValue('responsibilities', result.responsibilities)
      form.setValue('requirements', result.requirements)
    } catch (error) {
      console.error('Failed to generate job details:', error)
      alert('Could not generate details. Please try again.');
    } finally {
      setIsGenerating(false)
    }
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!form.getValues('tags').includes(newTag)) {
        form.setValue('tags', [...form.getValues('tags'), newTag]);
      }
      setTagInput('');
    }
  }
  
  const removeTag = (tagToRemove: string) => {
    form.setValue('tags', form.getValues('tags').filter(tag => tag !== tagToRemove));
  }

  function onSubmit(data: JobPostFormValues) {
    console.log(data)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline">Post a New Job</h1>
          <p className="text-muted-foreground">Fill out the form below to find your next great hire.</p>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>Start with the basics. You can use our AI to fill out the rest!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., MrBeast" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
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
                                    {platforms.map(p => (
                                        <SelectItem key={p} value={p}>
                                            <div className="flex items-center gap-2">
                                                <SocialIcon platform={p} className="h-5 w-5" />
                                                {p}
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
                                        <SelectTrigger><SelectValue placeholder="Select a job type" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    {jobTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
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
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Description & Requirements</CardTitle>
                            <CardDescription>Let our AI do the heavy lifting for you.</CardDescription>
                        </div>
                        <Button type="button" onClick={handleGenerateDetails} disabled={isGenerating}>
                            {isGenerating ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Wand className="mr-2 h-4 w-4" />}
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
                                <Textarea placeholder="A detailed description of the role..." rows={6} {...field} />
                            </FormControl>
                             <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="responsibilities"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Key Responsibilities</FormLabel>
                             <FormControl>
                                <Textarea 
                                    placeholder="List key responsibilities, separated by new lines."
                                    rows={5}
                                    value={field.value.join('\n')}
                                    onChange={(e) => field.onChange(e.target.value.split('\n'))}
                                />
                            </FormControl>
                             <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="requirements"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Key Requirements</FormLabel>
                             <FormControl>
                                 <Textarea 
                                    placeholder="List key requirements, separated by new lines."
                                    rows={5}
                                    value={field.value.join('\n')}
                                    onChange={(e) => field.onChange(e.target.value.split('\n'))}
                                />
                            </FormControl>
                             <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Compensation & Logistics</CardTitle>
                    <CardDescription>Salary, location, and other important details.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                     <FormField
                        control={form.control}
                        name="compensation"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Salary / Compensation</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., $80k - $120k or $50/hour" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., New York, USA" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isRemote"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 sm:col-span-2">
                                <div className="space-y-0.5">
                                    <FormLabel>Remote Work</FormLabel>
                                    <FormDescription>
                                    Allow candidates to work from anywhere.
                                    </FormDescription>
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
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Tags & Skills</CardTitle>
                    <CardDescription>Add tags to help candidates find your job. Press Enter to add a tag.</CardDescription>
                </CardHeader>
                <CardContent>
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                           <FormItem>
                                <FormControl>
                                    <div>
                                        <Input 
                                            placeholder="e.g., Video Editing, Adobe Premiere"
                                            value={tagInput}
                                            onChange={(e) => setTagInput(e.target.value)}
                                            onKeyDown={handleTagKeyDown}
                                        />
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {field.value.map(tag => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                    <button type="button" onClick={() => removeTag(tag)} className="ml-2 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </FormControl>
                           </FormItem>
                        )}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Custom Questions</CardTitle>
                    <CardDescription>Add custom questions for applicants to answer.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {fields.map((field, index) => (
                        <FormField
                            key={field.id}
                            control={form.control}
                            name={`customQuestions.${index}.text`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only">Question {index + 1}</FormLabel>
                                    <div className="flex items-center gap-2">
                                        <FormControl>
                                            <Input placeholder={`e.g., What's your favorite video you've edited?`} {...field} />
                                        </FormControl>
                                        <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                                            <Trash2 className="h-4 w-4 text-destructive" />
                                        </Button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => append({ text: "" })}
                    >
                        <Plus className="h-4 w-4" /> Add Question
                    </Button>
                </CardContent>
            </Card>
            
            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">Save as Draft</Button>
                <Button type="submit" className="bg-primary-gradient">
                    <Plus className="mr-2 h-4 w-4" />
                    Post Job
                </Button>
            </div>
        </form>
      </Form>
    </div>
  )
}
