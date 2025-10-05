import type { Job as JobType } from '@/components/ui/joblisting-component';

// This represents the structure of the data in Firestore
export interface JobPosting {
  id: string;
  company: string;
  title: string;
  logo: {
    'data-ai-hint': string;
    src: string;
    alt: string;
    children: string;
  };
  platform: JobType['platform'];
  job_description: string;
  aboutJobDetails?: string;
  idealCandidate?: string[];
  jobRequirements?: string[];
  bonusSkills?: string[];
  details?: string[];
  skills?: { [key: string]: string[] };
  sampleVideos?: { title: string, thumbnailUrl: string }[];
  salary: string;
  location: string;
  remote: string;
  job_time: string;
  posted_at: string;
  applicants: number;
  startDate: string;
  contentFormat: string;
  language: string;
  followers: string;
  referralBonus?: string;
}

// The allJobs and getJobById functions are no longer needed here
// as data will be fetched directly from Firestore in the components.
// You would typically have a script to populate Firestore with your initial data.
