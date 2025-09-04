'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import React from 'react';

const menuItems = [
  { href: '#jobs', label: 'Jobs', icon: <Briefcase className="size-5 shrink-0" />, description: "Find your next role in the creator economy." },
  { href: '#talent', label: 'Talent', icon: <Star className="size-5 shrink-0" />, description: "Discover top-tier creators and professionals." },
  { href: '#leaderboards', label: 'Leaderboards', icon: <TrendingUp className="size-5 shrink-0" />, description: "See who's making waves in the industry." },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-6 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">SocialVerse Jobs</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {menuItems.map((item) => (
                      <ListItem
                        key={item.label}
                        title={item.label}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                 <Link href="#jobs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Jobs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                 <Link href="#talent" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Talent
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                 <Link href="#leaderboards" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Leaderboards
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
           <Link href="/" className="mr-6 flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">SocialVerse Jobs</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">SocialVerse Jobs</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="my-6 flex flex-col gap-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="explore">
                    <AccordionTrigger className="text-base font-semibold">Explore</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pt-2">
                        {menuItems.map((item) => (
                           <a
                            key={item.label}
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={item.href}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.label}
                              </div>
                               <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className='flex flex-col gap-4'>
                  <Link href="#jobs" className="text-base font-semibold">Jobs</Link>
                  <Link href="#talent" className="text-base font-semibold">Talent</Link>
                  <Link href="#leaderboards" className="text-base font-semibold">Leaderboards</Link>
                </div>

                <div className="border-t pt-6 flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href="#">Sign In</Link>
                    </Button>
                    <Button asChild>
                      <Link href="#">Post a Job</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button>Post a Job</Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
