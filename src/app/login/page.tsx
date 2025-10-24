
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth, useUser, useFirestore } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Users, Briefcase, Building, User } from 'lucide-react';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const GradientIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#icon-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
    >
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary-gradient-start))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary-gradient-end))' }} />
        </linearGradient>
      </defs>
      <Icon />
    </svg>
);


const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const companySignUpSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Invalid business email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export default function LoginPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const [role, setRole] = useState<'employer' | 'talent' | null>(null);
  const [recruiterType, setRecruiterType] = useState<'creator' | 'company' | null>(null);
  const [isCompanySignUp, setIsCompanySignUp] = useState(false);

  const signInForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const companySignUpForm = useForm<z.infer<typeof companySignUpSchema>>({
    resolver: zodResolver(companySignUpSchema),
    defaultValues: { companyName: "", email: "", password: "" },
  });

  useEffect(() => {
    if (user) {
      if (role === 'employer' || isCompanySignUp) {
          router.push('/dashboard/recruiter');
      } else {
          router.push('/dashboard-talent');
      }
    }
  }, [user, router, role, isCompanySignUp]);


  const handleEmailSignIn = async (values: z.infer<typeof formSchema>) => {
    if (!auth || !firestore) return;

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
        if (role === 'talent') {
           await handleTalentSignUp(values);
        } else if (role === 'employer' && recruiterType === 'creator') {
            await handleCreatorRecruiterSignUp(values);
        } else {
            setIsCompanySignUp(true);
        }
      } else {
        console.error("Email sign-in failed:", error);
      }
    }
  };

  const handleCreatorRecruiterSignUp = async (values: z.infer<typeof formSchema>) => {
     if (!auth || !firestore) return;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        if (user) {
            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                displayName: user.email?.split('@')[0] || 'New Creator',
                email: user.email,
                photoURL: null,
                role: 'recruiter',
                recruiterType: 'creator',
            }, { merge: true });
        }
    } catch (error) {
        console.error("Creator recruiter sign-up failed:", error);
    }
  }
  
  const handleCompanySignUp = async (values: z.infer<typeof companySignUpSchema>) => {
    if (!auth || !firestore) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        await setDoc(userRef, {
            uid: user.uid,
            displayName: values.companyName,
            email: user.email,
            photoURL: null,
            role: 'recruiter',
            recruiterType: 'company',
        }, { merge: true });

        await addDoc(collection(firestore, 'companies'), {
          ownerUid: user.uid,
          name: values.companyName,
          email: values.email,
        });
      }
    } catch (error) {
      console.error("Company sign-up failed:", error);
    }
  };
  
  const handleTalentSignUp = async (values: z.infer<typeof formSchema>) => {
    if (!auth || !firestore) return;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        if (user) {
            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                displayName: user.email?.split('@')[0] || 'New User',
                email: user.email,
                photoURL: null,
                role: 'talent',
            }, { merge: true });
        }
    } catch (error) {
        console.error("Talent sign-up failed:", error);
    }
  };

  const resetForms = () => {
    setRole(null);
    setRecruiterType(null);
    setIsCompanySignUp(false);
  }

  const roleSelection = (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-headline">Join as a Client or Talent</CardTitle>
        <CardDescription>Are you here to hire or to find work?</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group"
          onClick={() => setRole('employer')}
        >
          <GradientIcon icon={Users} />
          <h3 className="font-semibold text-lg">I want to hire</h3>
          <p className="text-sm text-muted-foreground">Post jobs, find professionals, and manage your account.</p>
        </Card>
        <Card
          className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group"
          onClick={() => setRole('talent')}
        >
          <GradientIcon icon={Briefcase} />
          <h3 className="font-semibold text-lg">I want to apply</h3>
          <p className="text-sm text-muted-foreground">Showcase your portfolio, find jobs, and apply for positions.</p>
        </Card>
      </CardContent>
    </motion.div>
  );

  const recruiterTypeSelection = (
     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">Are you a Creator or a Company?</CardTitle>
            <CardDescription>This helps us tailor your experience.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
                className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group"
                onClick={() => setRecruiterType('creator')}
            >
                <GradientIcon icon={User} />
                <h3 className="font-semibold text-lg">I am a Creator</h3>
                <p className="text-sm text-muted-foreground">Sign in with your email account to hire talent.</p>
            </Card>
            <Card
                className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group"
                onClick={() => setRecruiterType('company')}
            >
                <GradientIcon icon={Building} />
                <h3 className="font-semibold text-lg">I am a Company</h3>
                <p className="text-sm text-muted-foreground">Sign up with your business email to post jobs and manage your team.</p>
            </Card>
        </CardContent>
         <div className="text-center mt-4">
            <a href="#" onClick={(e) => { e.preventDefault(); resetForms(); }} className="text-sm text-muted-foreground underline hover:text-primary">
                Back to role selection
            </a>
        </div>
    </motion.div>
  );

  const signInView = (
     <>
        <Form {...signInForm}>
            <form onSubmit={signInForm.handleSubmit(handleEmailSignIn)} className="space-y-4">
            <FormField
                control={signInForm.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit" className="w-full bg-primary-gradient">Sign In or Sign Up</Button>
            </form>
        </Form>
        {(role === 'employer' && recruiterType === 'company') && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            No account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsCompanySignUp(true); }} className="underline hover:text-primary">
              Sign up as a company
            </a>
          </p>
        )}
    </>
  );

  const companySignUpView = (
    <>
      <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Company Account</CardTitle>
          <CardDescription>
            Sign up to post jobs and hire amazing talent.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...companySignUpForm}>
            <form onSubmit={companySignUpForm.handleSubmit(handleCompanySignUp)} className="space-y-4">
              <FormField
                control={companySignUpForm.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={companySignUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={companySignUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary-gradient">Create Account</Button>
            </form>
          </Form>
           <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsCompanySignUp(false); }} className="underline hover:text-primary">
              Sign in
            </a>
          </p>
        </CardContent>
    </>
  );

  const authContent = () => {
    if (role === 'employer') {
        if (!recruiterType) {
            return recruiterTypeSelection;
        }
        if (recruiterType === 'company') {
            return isCompanySignUp ? companySignUpView : signInView;
        }
        if (recruiterType === 'creator') {
            return signInView;
        }
    }
    if (role === 'talent') {
      return (
        <>
            <Form {...signInForm}>
              <form onSubmit={signInForm.handleSubmit(handleEmailSignIn)} className="space-y-4">
                 <FormField
                  control={signInForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary-gradient">Sign In or Sign Up</Button>
              </form>
            </Form>
        </>
      )
    }
    return null;
  }

  const authFlow = (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
       { (!isCompanySignUp && (role !== 'employer' || recruiterType)) && 
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to CredAble</CardTitle>
          <CardDescription>
            Sign in to {role === 'employer' ? 'hire amazing talent' : 'find your next opportunity'}.
          </CardDescription>
        </CardHeader> }
        <CardContent>
            {authContent()}
            <p className="text-center text-xs text-muted-foreground mt-4">
                <a href="#" onClick={(e) => { e.preventDefault(); resetForms(); }} className="underline hover:text-primary">
                Back to role selection
                </a>
            </p>
        </CardContent>
    </motion.div>
  );

    const getAnimationKey = () => {
        if (!role) return 'selection';
        if (role === 'employer') {
            if (!recruiterType) return 'recruiter-type-selection';
            if (recruiterType === 'company') {
                return isCompanySignUp ? 'company-signup' : 'company-signin';
            }
            return 'creator-signin';
        }
        return 'talent-signin';
    }

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <div className="relative flex-grow flex items-start justify-center overflow-hidden p-4 pt-24 md:pt-32">
            <Link href="/" className="absolute top-4 left-4 z-20">
                <Image
                    src="https://i.ibb.co/C553W4D/Cred-Able-2.png"
                    alt="CredAble Logo"
                    width={150}
                    height={150}
                    className="w-32"
                />
            </Link>
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
        <Card className="w-full max-w-2xl z-10 bg-transparent border-none shadow-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={getAnimationKey()}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    {!role ? roleSelection : authFlow}
                </motion.div>
            </AnimatePresence>
        </Card>
        </div>
         <footer className="w-full bg-gray-900 text-gray-400 py-4">
            <div className="container mx-auto text-center text-xs">
                <p>&copy; {new Date().getFullYear()} CredAble Inc. &bull; <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> &bull; <Link href="/terms" className="hover:text-white">Terms of Service</Link></p>
            </div>
        </footer>
    </div>
  );
}

    