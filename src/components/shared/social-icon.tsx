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
  | 'OnlyFans';

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
      return <Youtube {...props} className={cn(props.className, 'text-red-600')} />;
    case 'X':
      return <Twitter {...props} className={cn(props.className, 'text-foreground')} />;
    case 'Facebook':
      return <Facebook {...props} className={cn(props.className, 'text-blue-700')} />;
    case 'Twitch':
      return <Twitch {...props} className={cn(props.className, 'text-purple-600')} />;
    case 'TikTok':
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
          className={cn(props.className, 'text-cyan-400')}
        >
          <path d="M16.5 5.5A4.5 4.5 0 1 1 12 10v9" />
          <path d="M12 2v8" />
          <path d="m16 2-4 4" />
        </svg>
      );
    case 'Snapchat':
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
          className={cn(props.className, 'text-yellow-400')}
        >
            <path d="M12 8.5c-2.3 0-3.6.4-5.2 2.2-1.9 2-1.5 4.3-.4 5.8.9.9 2 1.4 3.1 1.5 1.4.2 2.7-.2 3.7-1.2.9-1.2 1.2-2.9.2-4.5-.4-.9-1.3-1.8-2.5-1.8z" />
            <path d="M14.5 20.4c-1.3.6-2.7.9-4.1.9-4.8 0-8.6-4.3-8.4-9.4.2-4.1 3.5-7.5 7.6-7.9 4.3-.4 8.2 2.7 8.8 6.9.5 3.3-1.1 6.3-3.8 7.9l3.5 3z" />
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
