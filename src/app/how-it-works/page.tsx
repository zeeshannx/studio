
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, UserPlus, FileText, Search, UserCheck, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';


const talentSteps = [
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: 'Create Your Profile',
    description: 'Sign up and build your talent profile in minutes. Showcase your skills, experience, and portfolio to attract top employers and creators.',
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Find Opportunities',
    description: 'Browse thousands of job listings from leading brands and creators. Use our advanced filters to find the perfect match for your skills.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: 'Get Hired',
    description: 'Apply directly to jobs, get discovered by employers, and land your next big project in the creator economy. It\'s that simple.',
  },
];

const employerSteps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Post a Job',
    description: 'Create a detailed job posting to attract qualified candidates. Specify your needs, from video editors to community managers.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'Discover Talent',
    description: 'Search our extensive database of pre-vetted professionals. Review profiles, portfolios, and past work to find the perfect fit.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Hire with Confidence',
    description: 'Connect with top talent, manage applications, and hire the best person for your team, all through our streamlined platform.',
  },
];


export default function HowItWorksPage() {
  return (
    <div className="bg-background relative overflow-hidden">
        <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={cn(
            '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
            'absolute inset-0 z-0 h-full w-full skew-y-12 opacity-50'
            )}
        />
        <SocialIconsAnimation />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">How CredAble Works</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Connecting creators with opportunities is simple. Follow our straightforward process to find your next job or hire top talent.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">For Talent</h2>
            <div className="space-y-8">
              {talentSteps.map((step, index) => (
                <Card key={index} className="text-center p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">For Employers</h2>
            <div className="space-y-8">
              {employerSteps.map((step, index) => (
                <Card key={index} className="text-center p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <section className="text-center mt-24">
            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join the fastest-growing community in the creator economy.</p>
            <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-primary-gradient">
                    <Link href="/jobs">
                        Find a Job <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                     <Link href="/talent">
                        Hire Talent <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
