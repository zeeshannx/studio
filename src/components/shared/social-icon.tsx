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
          <path d="M20.22,2.02A2.06,2.06,0,0,0,18.3,1.38l-1.3,1a14.2,14.2,0,0,0-2.88-.45,14.36,14.36,0,0,0-5.18.06,13.63,13.63,0,0,0-2.82.45l-1.3-1a2.06,2.06,0,0,0-1.92.64,2.15,2.15,0,0,0-.4,2.35l.9,2.42A15,15,0,0,0,2.05,12.7a14.2,14.2,0,0,0,5.32,5.2l1.12,1.32a2,2,0,0,0,1.38.56,2.06,2.06,0,0,0,.64-.13,1.94,1.94,0,0,0,1-1.24l.64-2.22a10.2,10.2,0,0,0,1.83.19,10,10,0,0,0,1.83-.19l.64,2.22a1.94,1.94,0,0,0,1,1.24,2.06,2.06,0,0,0,.64.13,2,2,0,0,0,1.38-.56l1.12-1.32a14.2,14.2,0,0,0,5.32-5.2,15,15,0,0,0-1.63-6.91l.9-2.42A2.15,2.15,0,0,0,20.22,2.02ZM8.42,13.25a2.43,2.43,0,0,1-2.5-2.5A2.43,2.43,0,0,1,8.42,8.25a2.48,2.48,0,0,1,2.5,2.5A2.43,2.43,0,0,1,8.42,13.25Zm7.16,0a2.43,2.43,0,0,1-2.5-2.5,2.43,2.43,0,0,1,2.5-2.5,2.48,2.48,0,0,1,2.5,2.5A2.43,2.43,0,0,1,15.58,13.25Z"/>
        </svg>
      );
    case 'TikTok':
      return (
         <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          {...props}
        >
          <path fill="#FF0050" d="M16.23,6.32a4.68,4.68,0,0,1-4.7-4.63V10a5,5,0,0,0,5,5h.1A4.83,4.83,0,0,0,21,10.23,4.73,4.73,0,0,0,16.23,6.32Z"/>
          <path fill="#00F2EA" d="M11.53,14.88a4.83,4.83,0,0,1-4.7-4.64A4.73,4.73,0,0,1,11.53,6V10a5,5,0,0,0,5,5h.1A4.83,4.83,0,0,1,12,14.77,4.73,4.73,0,0,1,11.53,14.88Z"/>
          <path fill="#FFFFFF" d="M12,14.77a4.83,4.83,0,0,0,4.7-4.64A4.73,4.73,0,0,0,12,6V10a5,5,0,0,1-5-5H6.9a4.83,4.83,0,0,0,4.7,4.64A4.73,4.73,0,0,0,12,14.77Z"/>
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
                <path fill="#FFFFFF" stroke="#000000" stroke-width="1.5" d="M12,5.5c-3.18,0-5,2.44-5,5.13a6,6,0,0,0,1.67,4.2,4.87,4.87,0,0,0,3.33,1.67c1.33.2,2.67-.13,3.67-1.14.9-1.2.9-3.2,0-4.67-.9-1.33-2.4-2.19-4.67-2.19Z"/>
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
