
'use client'

import { useState, useEffect } from 'react'
import type { SocialPlatform } from '@/components/shared/social-icon'

// In a real application, this would fetch the user's connected accounts from a database.
const fetchConnectedAccounts = async (): Promise<SocialPlatform[]> => {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return a static list for demonstration purposes
  return ['YouTube', 'Twitch', 'Facebook'];
};


export function useConnectedAccounts() {
  const [accounts, setAccounts] = useState<SocialPlatform[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAccounts = async () => {
      setIsLoading(true);
      const connectedAccounts = await fetchConnectedAccounts();
      setAccounts(connectedAccounts);
      setIsLoading(false);
    };

    getAccounts();
  }, []);

  return { accounts, isLoading };
}
