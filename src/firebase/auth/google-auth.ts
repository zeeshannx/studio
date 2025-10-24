'use client';

import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

export async function signInWithGoogle(auth: Auth, isCreatorRecruiter: boolean = false): Promise<UserCredential | undefined> {
  try {
    const provider = new GoogleAuthProvider();
    if (isCreatorRecruiter) {
      provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
    }
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    return userCredential;
  } catch (error: any) {
    // Handle specific error codes if needed
    console.error('Error during Google sign-in:', error.message);
  }
}
