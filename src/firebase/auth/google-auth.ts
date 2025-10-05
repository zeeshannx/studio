'use client';

import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getSdks } from '@/firebase'; // Using getSdks to get firestore instance

export async function signInWithGoogle(auth: Auth, isTalent: boolean = false): Promise<void> {
  try {
    const provider = new GoogleAuthProvider();
    if (isTalent) {
      provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
    }
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // After successful sign-in, save/update user data in Firestore
    if (user) {
      const { firestore } = getSdks(auth.app);
      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(
        userRef,
        {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        },
        { merge: true } // Use merge to avoid overwriting existing data
      );
    }
  } catch (error: any) {
    // Handle specific error codes if needed
    console.error('Error during Google sign-in:', error.message);
  }
}
