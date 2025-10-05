
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signInWithGoogle } from '@/firebase/auth/google-auth';
import { signInWithFacebook } from '@/firebase/auth/facebook-auth';
import { useAuth, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Facebook, Users, Briefcase } from 'lucide-react';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M21.35 11.1h-9.1v2.7h5.2c-.2 1.7-1.3 3.2-3.1 4.2v2.2h2.8c1.6-1.5 2.6-3.8 2.6-6.4 0-.6-.1-1.2-.2-1.7z"
      />
      <path
        fill="#34A853"
        d="M12.25 22c2.4 0 4.5-.8 6-2.2l-2.8-2.2c-.8.5-1.8.9-3.2.9-2.5 0-4.6-1.7-5.3-4H3.1v2.3c1.5 3 4.6 5 8.15 5z"
      />
      <path
        fill="#FBBC05"
        d="M6.95 14.7c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V8.9H3.1c-.6 1.2-1 2.6-1 4.1s.4 2.9 1 4.1l3.85-2.4z"
      />
      <path
        fill="#EA4335"
        d="M12.25 6.2c1.3 0 2.5.5 3.4 1.4l2.5-2.5C16.7 3.2 14.6 2 12.25 2c-3.55 0-6.65 2-8.15 5l3.85 2.4c.7-2.3 2.8-4 5.3-4z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const auth = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [role, setRole] = useState<'employer' | 'talent' | null>(null);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    if (auth) {
      await signInWithGoogle(auth);
    }
  };

  const handleFacebookSignIn = async () => {
    if (auth) {
      await signInWithFacebook(auth);
    }
  };

  const roleSelection = (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Join as a Client or Talent</CardTitle>
        <CardDescription>Are you here to hire or to find work?</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all"
          onClick={() => setRole('employer')}
        >
          <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold text-lg">I want to hire</h3>
          <p className="text-sm text-muted-foreground">I want to log in to my creator account or Company account, where I can post jobs, find professionals, etc.</p>
        </Card>
        <Card
          className="p-6 text-center cursor-pointer hover:bg-accent hover:border-primary transition-all"
          onClick={() => setRole('talent')}
        >
          <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold text-lg">I want to apply</h3>
          <p className="text-sm text-muted-foreground">I want to log in to my Talent account, where I can showcase my portfolio, find job positions, and apply for them.</p>
        </Card>
      </CardContent>
    </motion.div>
  );

  const authButtons = (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to CredAble</CardTitle>
          <CardDescription>
            Sign in to {role === 'employer' ? 'hire amazing talent' : 'find your next opportunity'}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
              <GoogleIcon />
              <span className="ml-2">Sign in with Google</span>
            </Button>
            <Button variant="outline" className="w-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:text-white" onClick={handleFacebookSignIn}>
              <Facebook className="mr-2 h-5 w-5" />
              Sign in with Facebook
            </Button>
          </div>
           <p className="text-center text-xs text-muted-foreground mt-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setRole(null); }} className="underline hover:text-primary">
              Back to role selection
            </a>
          </p>
        </CardContent>
    </motion.div>
  );


  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden p-4">
        <Link href="/" className="absolute top-4 left-4 z-20">
            <Image
                src="https://i.ibb.co/4gdcKdk/Cred-Able-1.png"
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
                key={role || 'selection'}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
            >
                {!role ? roleSelection : authButtons}
            </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
}
