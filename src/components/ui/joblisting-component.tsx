
"use client"

import { useEffect, useRef, useState, type JSX } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { SocialIcon, type SocialPlatform } from "@/components/shared/social-icon";
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Card, CardContent } from "./card"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export interface Job {
  id: string;
  company: string
  title: string
  logo: React.ReactNode
  platform?: SocialPlatform
  job_description: string
  salary: string
  location: string
  remote: string
  job_time: string
  posted_at?: string
  applicants?: number
}

export interface JobListingComponentProps {
  jobs: Job[]
  className?: string
  onJobClick?: (job: Job) => void
}


export default function JobListingComponent({
  jobs,
  className,
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null)
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const handleCardClick = (job: Job, e: React.MouseEvent<HTMLDivElement>) => {
    // Don't open the modal if the user clicks a button inside the card
    if ((e.target as HTMLElement).closest('a, button')) {
      return;
    }
    setActiveItem(job)
    if (onJobClick) onJobClick(job)
  }

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-smooth-1000/10 pointer-events-none fixed inset-0 z-40 bg-blend-luminosity backdrop-blur-xl"
            onClick={() => setActiveItem(null)}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeItem ? (
          <>
            <div className="group fixed inset-0 z-50 grid place-items-center" onClick={() => setActiveItem(null)}>
              <motion.div
                className="bg-background flex h-fit w-[90%] max-w-lg cursor-default flex-col items-start gap-4 overflow-hidden border p-4 shadow-lg"
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                layoutId={`job-card-${activeItem.id}`}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-start justify-between">
                  <motion.div layoutId={`job-logo-${activeItem.id}`}>
                    {activeItem.logo}
                  </motion.div>
                   {activeItem.platform &&
                    <motion.div layoutId={`job-platform-${activeItem.id}`}>
                      <Badge variant="outline" className="flex items-center gap-1.5">
                        <SocialIcon platform={activeItem.platform} className="h-4 w-4" />
                        {activeItem.platform}
                      </Badge>
                    </motion.div>
                  }
                </div>
                 <div>
                    <motion.h3 className="text-2xl font-bold" layoutId={`job-title-${activeItem.id}`}>{activeItem.title}</motion.h3>
                    <motion.p className="text-muted-foreground" layoutId={`job-company-${activeItem.id}`}>{activeItem.company}</motion.p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-muted-foreground mt-2">
                    <motion.div className="flex items-center gap-2" layoutId={`job-location-${activeItem.id}`}>
                      <MapPin className="h-4 w-4" /> {activeItem.location}
                    </motion.div>
                    <motion.div className="flex items-center gap-2" layoutId={`job-time-${activeItem.id}`}>
                      <Clock className="h-4 w-4" /> {activeItem.job_time}
                    </motion.div>
                    <motion.div className="flex items-center gap-2" layoutId={`job-salary-${activeItem.id}`}>
                      <DollarSign className="h-4 w-4 text-green-500" /> <span className="text-green-500 font-semibold">{activeItem.salary}</span>
                    </motion.div>
                    {activeItem.applicants &&
                      <motion.div className="flex items-center gap-2" layoutId={`job-applicants-${activeItem.id}`}>
                        <Users className="h-4 w-4" /> {activeItem.applicants} applicants
                      </motion.div>
                    }
                  </div>
                
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-foreground text-sm my-4"
                >
                  {activeItem.job_description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="w-full flex items-center justify-between"
                >
                  <span className="text-xs text-muted-foreground">{activeItem.posted_at}</span>
                  <Button asChild className="w-1/2 bg-primary-gradient">
                    <Link href={`/jobs/${activeItem.id}`}>View Details</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div className={cn("relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6", className)}>
          {jobs.map((job) => (
            <motion.div
              layoutId={`job-card-${job.id}`}
              key={job.id}
              onClick={(e) => handleCardClick(job, e)}
            >
              <Card className="p-6 cursor-pointer hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col gap-4 flex-grow">
                  <div className="flex items-start justify-between">
                    <motion.div layoutId={`job-logo-${job.id}`}>{job.logo}</motion.div>
                    {job.platform &&
                      <motion.div layoutId={`job-platform-${job.id}`}>
                        <Badge variant="outline" className="flex items-center gap-1.5">
                          <SocialIcon platform={job.platform} className="h-4 w-4" />
                          {job.platform}
                        </Badge>
                      </motion.div>
                    }
                  </div>
                  <div className="flex-grow">
                    <motion.h3 className="text-xl font-bold" layoutId={`job-title-${job.id}`}>{job.title}</motion.h3>
                    <motion.p className="text-muted-foreground text-sm" layoutId={`job-company-${job.id}`}>{job.company}</motion.p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mt-2">
                    <motion.div className="flex items-center gap-2 truncate" layoutId={`job-location-${job.id}`}>
                      <MapPin className="h-4 w-4 shrink-0" /> <span className="truncate">{job.location}</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2 truncate" layoutId={`job-time-${job.id}`}>
                      <Clock className="h-4 w-4 shrink-0" /> <span className="truncate">{job.job_time}</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2" layoutId={`job-salary-${job.id}`}>
                      <DollarSign className="h-4 w-4 shrink-0 text-green-500" /> <span className="font-semibold text-green-500">{job.salary}</span>
                    </motion.div>
                    {job.applicants !== undefined &&
                      <motion.div className="flex items-center gap-2" layoutId={`job-applicants-${job.id}`}>
                        <Users className="h-4 w-4 shrink-0" /> {job.applicants} applicants
                      </motion.div>
                    }
                  </div>

                   <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {job.job_description}
                  </p>

                </CardContent>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-muted-foreground">{job.posted_at}</span>
                  <Button asChild variant="default" size="sm" className="bg-primary-gradient">
                     <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
    </>
  )
}
