'use client';

import { motion } from 'framer-motion';
import { Youtube, Twitter, Instagram, Twitch, Facebook, Linkedin, LucideIcon } from 'lucide-react';
import React from 'react';

const icons: { component: LucideIcon; className: string }[] = [
  { component: Youtube, className: 'text-red-500' },
  { component: Twitter, className: 'text-sky-400' },
  { component: Instagram, className: 'text-pink-500' },
  { component: Twitch, className: 'text-purple-500' },
  { component: Facebook, className: 'text-blue-600' },
  { component: Linkedin, className: 'text-blue-800' },
  { component: Youtube, className: 'text-red-500' },
  { component: Twitter, className: 'text-sky-400' },
  { component: Instagram, className: 'text-pink-500' },
  { component: Twitch, className: 'text-purple-500' },
];

const SocialIconsAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
      {icons.map((Icon, index) => {
        const duration = 20 + Math.random() * 20; // 20-40 seconds
        const delay = Math.random() * duration;
        const size = 40 + Math.random() * 60; // 40px-100px
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              top: `${startY}vh`,
              left: `${startX}vw`,
              opacity: 0,
              scale: 0.5,
             }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: duration,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              delay: delay,
            }}
            style={{
              width: size,
              height: size,
            }}
          >
            <Icon.component className={`${Icon.className} h-full w-full`} />
          </motion.div>
        );
      })}
    </div>
  );
};

export { SocialIconsAnimation };
