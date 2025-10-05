'use client';

import { useMemo } from 'react';
import { useFirebase } from '@/firebase/provider';
import { User } from 'firebase/auth';

export interface UserState {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

/**
 * Hook to get the current authenticated user's state.
 *
 * It provides a streamlined way to access the user object, loading status,
 * and any authentication errors. This hook relies on the `FirebaseProvider`
 * being present in the component tree.
 *
 * @returns {UserState} An object containing the `user`, `isUserLoading`, and `userError`.
 */
export function useUser(): UserState {
  // `useFirebase` provides the user state from the context.
  const { user, isUserLoading, userError } = useFirebase();

  // useMemo ensures that the returned object reference is stable
  // as long as the user state values do not change, preventing
  // unnecessary re-renders in consuming components.
  return useMemo(
    () => ({
      user,
      isUserLoading,
      userError,
    }),
    [user, isUserLoading, userError]
  );
}
