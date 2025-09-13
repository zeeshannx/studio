
import Link from 'next/link';
import { Users, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
               <Image src="https://media.discordapp.net/attachments/1386576152503652472/1413874366982258829/Cred_Able_1.png?ex=68c6bf1d&is=68c56d9d&hm=d9a52cd4b2a5ec705c69431feccb397810761b0c250875b23fa1558c6108a92a&=&format=webp&quality=lossless&width=625&height=625" alt="CredAble Logo" width={80} height={80} />
               
            </Link>
            <p className="text-muted-foreground text-sm">
              The #1 job board for creators and social media professionals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#jobs" className="text-muted-foreground hover:text-primary">Jobs</Link></li>
              <li><Link href="#talent" className="text-muted-foreground hover:text-primary">Talent</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CredAble. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

    