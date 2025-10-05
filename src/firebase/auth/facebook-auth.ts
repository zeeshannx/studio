
'use client';

import {
  Auth,
  FacebookAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getSdks } from '@/firebase';

const provider = new FacebookAuthProvider();

export async function signInWithFacebook(auth: Auth): Promise<void> {
  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

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
        { merge: true }
      );
    }
  } catch (error: any) {
    console.error('Error during Facebook sign-in:', error.message);
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Handle account exists with different credential error
      // You might want to link the credentials here
    }
  }
}
