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
            xmlns="http://www  .w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
            className={cn(props.className, 'text-[#5865F2]')}
        >
          <path d="M20.317,4.37a1.87,1.87,0,0,0-1.65-0.92H5.33a1.87,1.87,0,0,0-1.65.92,1.84,1.84,0,0,0-.24,1.94l1,4.55a12.5,12.5,0,0,0-2.22,4.54v0.23c0,3.25,2.64,5.9,5.9,5.9h8.2c3.25,0,5.9-2.65,5.9-5.9v-0.23a12.5,12.5,0,0,0-2.22-4.54l1-4.55A1.84,1.84,0,0,0,20.317,4.37ZM9.46,14.81a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,9.46,14.81Zm5.08,0a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,14.54,14.81Z" />
        </svg>
      );
    case 'Snapchat':
        return (
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                {...props}
            >
                <path fill="#FFFC00" d="M21.5,2H2.5A2.5,2.5,0,0,0,0,4.5v15A2.5,2.5,0,0,0,2.5,22h19A2.5,2.5,0,0,0,24,19.5V4.5A2.5,2.5,0,0,0,21.5,2Z"/>
                <path fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8.5,12.5v-2c0-2.49,2.01-4.5,4.5-4.5s4.5,2.01,4.5,4.5v2c0,1.55-1.04,2.9-2.5,3.54l-1.46,0.63c-0.37,0.16-0.81,0.16-1.18,0L11,16.04c-1.46-0.64-2.5-2-2.5-3.54Z"/>
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
                <defs>
                    <linearGradient id="tiktok-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#ff0050'}} />
                        <stop offset="100%" style={{stopColor: '#00f2ea'}} />
                    </linearGradient>
                </defs>
                <path fill="url(#tiktok-gradient)" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.1-.55-.32-1.1-.68-1.6-1.07-.02-.02-.03-.04-.05-.06A6.98 6.98 0 0 1 12.52 8.5c.01-.95.13-1.9.36-2.83A7.05 7.05 0 0 1 12.53 0zm-2.49 5.56c.24 2.05.65 4.1 1.48 6.04 1.1 2.58 2.91 4.75 5.2 6.32v3.94c-1.11-.27-2.2-.69-3.23-1.25a12.63 12.63 0 0 1-3.1-2.4c-1.25-1.2-2.3-2.56-3.14-4.05a21.45 21.45 0 0 1-1.6-4.9c-.19-1.24-.3-2.49-.38-3.74a17.65 17.65 0 0 1 .18-3.41c.29-2.09.84-4.14 1.66-6.12.02-.05.05-.1.08-.14.22-.5.48-.99.76-1.47.05-.1.1-.19.15-.29H11.4c-.1.33-.2.66-.31.99a22.22 22.22 0 0 0-1.83 5.48C8.9 6.83 8.98 7.82 9 8.81c.02 1.13.1 2.27.23 3.4.15 1.2.36 2.39.64 3.58.28 1.2.62 2.38 1.03 3.54.4 1.16.88 2.29 1.43 3.39.55 1.1 1.2 2.15 1.95 3.15.35.47.73.92 1.12 1.35v-3.32a9.42 9.42 0 0 0-3.9-4.3c-1.39-1.07-2.53-2.44-3.4-3.98a14.47 14.47 0 0 1-1.28-4.99c-.04-1.28-.02-2.57.07-3.85.09-1.27.24-2.54.46-3.8h3.94c-.13 1.06-.2 2.12-.23 3.18-.02.92.03 1.84.11 2.76.08.92.2 1.84.36 2.75.17.9.38 1.8.64 2.69.26.9.55 1.78.9 2.64.34.86.74 1.7 1.2 2.5.46.8.98 1.58 1.57 2.3.59.72 1.23 1.4 1.94 2.02.7.62 1.45 1.18 2.24 1.68v-3.8c-1.12-.9-2.09-2-2.88-3.23a10.87 10.87 0 0 1-1.5-3.6c-.33-1.1-.55-2.23-.7-3.36a13.31 13.31 0 0 1-.16-3.44c.03-1.87.31-3.72.84-5.52h3.9c-.31 1.4-.5 2.83-.59 4.27-.07 1.15-.09 2.3-.04 3.45.04 1.15.14 2.3.28 3.44.15 1.14.35 2.27.58 3.39.24 1.12.53 2.23.86 3.32.33 1.1.7 2.18 1.12 3.24.42 1.06.9 2.1 1.42 3.12.52 1.02 1.1 2 1.73 2.95.63.95 1.32 1.86 2.08 2.72.36.4.74.79 1.14 1.15.4.36.82.7 1.25 1.02v-3.78c-.97-.56-1.9-1.23-2.76-2.02a14.7 14.7 0 0 1-4.43-5.75 16.32 16.32 0 0 1-1.3-4.84c-.1-1.42-.1-2.84.02-4.26a11.53 11.53 0 0 1 1.02-4.47z"/>
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
                <path fill="currentColor" d="M148.87 128a20.86 20.86 0 1 1-20.87-20.86 20.86 20.86 0 0 1 20.87 20.86Zm-20.87-32.86a32.86 32.86 0 1 0 32.86 32.86 32.86 32.86 0 0 0-32.86-32.86ZM128 0a128 128 0 1 0 128 128A128 128 0 0 0 128 0Zm0 230.4a102.4 102.4 0 1 1 102.4-102.4 102.4 102.4 0 0 1-102.4 102.4Zm62.46-93.57a73.73 73.73 0 0 0-5.63-29.44q-4.61-12.8-14.34-22.32t-22.32-14.34q-12.8-4.86-29.44-5.63a115.48 115.48 0 0 0-30.72 0 73.73 73.73 0 0 0-29.44 5.63q-12.8 4.61-22.32 14.34t-14.34 22.32q-4.86 12.8-5.63 29.44a115.48 115.48 0 0 0 0 30.72 73.73 73.73 0 0 0 5.63 29.44q4.61 12.8 14.34 22.32t22.32 14.34q12.8 4.86 29.44 5.63a115.48 115.48 0 0 0 30.72 0 73.73 73.73 0 0 0 29.44-5.63q12.8-4.61 22.32-14.34t14.34-22.32q4.86-12.8 5.63-29.44a115.48 115.48 0 0 0 0-30.72Z"/>
            </svg>
        );
    default:
      return null;
  }
}
