import { Instagram, Linkedin, Youtube, Twitter, Facebook, Twitch } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SocialPlatform =
  | 'Instagram'
  | 'LinkedIn'
  | 'YouTube'
  | 'Snapchat'
  | 'X'
  | 'Tumblr'
  | 'TikTok'
  | 'Facebook'
  | 'Twitch'
  | 'OnlyFans'
  | 'Discord';

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

export function SocialIcon({ platform, className }: SocialIconProps) {
  const props = { className: cn('h-6 w-6', className) };

  switch (platform) {
    case 'Instagram':
      return <Instagram {...props} className={cn(props.className, 'text-pink-500')} />;
    case 'LinkedIn':
      return <Linkedin {...props} className={cn(props.className, 'text-blue-600')} />;
    case 'YouTube':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
          className={cn(props.className, 'text-red-600')}
        >
          <path d="M21.582,6.186 C21.325,5.253 20.628,4.557 19.694,4.299 C18.006,3.875 12,3.875 12,3.875 C12,3.875 5.994,3.875 4.306,4.299 C3.372,4.557 2.675,5.253 2.418,6.186 C2,7.875 2,12 2,12 C2,12 2,16.125 2.418,17.814 C2.675,18.747 3.372,19.443 4.306,19.701 C5.994,20.125 12,20.125 12,20.125 C12,20.125 18.006,20.125 19.694,19.701 C20.628,19.443 21.325,18.747 21.582,17.814 C22,16.125 22,12 22,12 C22,12 22,7.875 21.582,6.186 Z" fill="#FF0000"/>
          <path d="M10,15.5 L15.5,12 L10,8.5 L10,15.5 Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'X':
      return <Twitter {...props} className={cn(props.className, 'text-foreground')} />;
    case 'Facebook':
      return <Facebook {...props} className={cn(props.className, 'text-blue-700')} />;
    case 'Twitch':
      return <Twitch {...props} className={cn(props.className, 'text-purple-600')} />;
    case 'Discord':
       return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
            className={cn(props.className, 'text-[#5865F2]')}
        >
          <path d="M19.8,4.1c-0.8-0.3-1.6-0.5-2.4-0.6c-0.3,0.5-0.6,1-0.8,1.5c-1.4-0.3-2.8-0.3-4.2,0c-0.2-0.5-0.5-1-0.8-1.5 c-0.8,0.1-1.6,0.3-2.4,0.6C1.9,7.3,0.9,11.2,1.3,15c1.4,1.8,3.2,3,5.3,3.7c0.4-0.6,0.8-1.2,1-1.9c-0.5-0.2-1-0.4-1.5-0.7 c-0.2-0.1-0.3-0.2-0.5-0.3c-0.1,0-0.2-0.1-0.2-0.1c-0.7-0.4-0.7-0.4-0.2-0.8c0.5-0.4,1-0.7,1.6-1c0.4-0.2,0.9-0.4,1.3-0.6 c0.5-0.2,1-0.3,1.5-0.3h0.1c0.5,0,1,0.1,1.5,0.3c0.4,0.2,0.9,0.4,1.3,0.6c0.6,0.3,1.1,0.6,1.6,1c0.5,0.4,0.5,0.4-0.2,0.8 c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.3,0.2-0.5,0.3c-0.5,0.3-1,0.5-1.5,0.7c0.2,0.7,0.6,1.3,1,1.9c2.1-0.7,3.9-1.9,5.3-3.7 C23.1,11.2,22.1,7.3,19.8,4.1z M9.8,13.6c-0.8,0-1.5-0.7-1.5-1.7s0.7-1.7,1.5-1.7s1.5,0.7,1.5,1.7S10.7,13.6,9.8,13.6z M14.2,13.6 c-0.8,0-1.5-0.7-1.5-1.7s0.7-1.7,1.5-1.7s1.5,0.7,1.5,1.7S15,13.6,14.2,13.6z"/>
        </svg>
      );
    case 'Snapchat':
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                {...props}
            >
                <path fill="#FFFC00" stroke="#000000" strokeWidth="0.5" d="M21.5,2H2.5A2.5,2.5,0,0,0,0,4.5v15A2.5,2.5,0,0,0,2.5,22h19A2.5,2.5,0,0,0,24,19.5V4.5A2.5,2.5,0,0,0,21.5,2Z"/>
                <path fill="none" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" d="M8.5,12.5v-2c0-2.49,2.01-4.5,4.5-4.5s4.5,2.01,4.5,4.5v2c0,1.55-1.04,2.9-2.5,3.54l-1.46,0.63c-0.37,0.16-0.81,0.16-1.18,0L11,16.04c-1.46-0.64-2.5-2-2.5-3.54Z"/>
            </svg>
        );
    case 'Tumblr':
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
                className={cn(props.className, 'text-blue-900')}
            >
                <path d="M14 21v-4.5h3V12h-3V7.5c0-1.2.6-2.5 2.5-2.5H18V1h-4.5C8.9 1 7 4.9 7 9.5V12h-3v4.5h3V21h4z"/>
            </svg>
        );
    case 'TikTok':
       return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                {...props}
            >
                <path fill="#FF0050" d="M16.6,5.82h-3.2v10.5c0,1.24-1.01,2.25-2.25,2.25S8.9,17.56,8.9,16.32V5.82H5.7v10.5c0,3.1,2.54,5.65,5.65,5.65s5.65-2.54,5.65-5.65V5.82z"/>
                <path fill="#00F2EA" d="M16.6,5.82h3.2v10.5c0,1.24,1.01,2.25,2.25,2.25S24.3,17.56,24.3,16.32V5.82h3.2v10.5c0,3.1-2.54,5.65-5.65,5.65s-5.65-2.54-5.65-5.65V5.82z"/>
                <path fill="#000000" d="M12.5,0.22c-0.1,1.7-1.1,3.1-2.5,3.8c-1.4,0.7-3,0.7-4.4,0C4.2,3.32,3.2,1.92,3.1,0.22H0v16.1c0,3.1,2.54,5.65,5.65,5.65s5.65-2.54,5.65-5.65V0.22H12.5z"/>
                <path fill="#FFFFFF" d="M12.5,0.22h-3.2v16.1c0,1.24-1.01,2.25-2.25,2.25S4.8,17.56,4.8,16.32V0.22H1.6v16.1c0,3.1,2.54,5.65,5.65,5.65s5.65-2.54,5.65-5.65V0.22H12.5z"/>
            </svg>
        );
    case 'OnlyFans':
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                {...props}
                className={cn(props.className, 'text-[#00aff0]')}
            >
                <path fill="currentColor" d="M128,32C75.1,32,32,75.1,32,128s43.1,96,96,96s96-43.1,96-96S180.9,32,128,32z M176.8,136.2 c-9.9,13.1-25.2,21.6-42.5,22.2c-1.3,0-2.5-1-2.7-2.3c-0.2-1.3,0.6-2.5,1.8-2.9c15.6-5.4,28.2-15.6,36.2-28.7 c1.2-1.9,3.6-2.3,5.5-1.1C177,134.5,177.3,135.5,176.8,136.2z M104.4,85.8c-1.5-1.2-3.7-0.9-4.9,0.6c-7,9-11.8,20-13.6,32.1 c-0.3,1.6,0.8,3.1,2.4,3.4c1.6,0.3,3.1-0.8,3.4-2.4c1.6-10.7,5.8-20.4,12-28.3C105.1,89.7,105.9,87.3,104.4,85.8z"/>
            </svg>
        );
    default:
      return null;
  }
}
