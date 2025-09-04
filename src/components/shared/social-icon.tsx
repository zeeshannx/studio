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
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
                className={cn(props.className, 'text-sky-500')}
            >
                <path d="M4.2 10.7C3.1 8.8 4.1 6.2 6.4 4.7c2.3-1.4 5.1-1.1 6.8.8l1.8-1.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L16 8.3c1.9 1.7 2.2 4.5.8 6.8-1.4 2.3-4 3.2-6.2 2.2" />
                <path d="m18.6 13.2.9-3.2c.1-.4-.2-.8-.6-.9l-3.2.9c-.4.1-.7.5-.6.9l.9 3.2c.1.4.5.7.9.6z" />
                <path d="m17.6 15.6 2.3.7c.4.1.8-.1.9-.5l.7-2.3c.1-.4-.1-.8-.5-.9l-2.3-.7c-.4-.1-.8.1-.9.5l-.7 2.3c-.1.4.1.8.5.9z" />
                <path d="M20.2 9.5c.4.1.8-.1.9-.5l.9-3.2c.1-.4-.1-.8-.5-.9l-3.2-.9c-.4-.1-.8.1-.9.5l-.9 3.2c-.1.4.1.8.5.9z" />
                <path d="M12.2 19.8c-2.3 1.5-5.3.9-7-1.1-1.8-2-1.6-4.9.4-6.6l.8-.8" />
            </svg>
        );
    default:
      return null;
  }
}
