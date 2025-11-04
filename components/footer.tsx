import Link from 'next/link';
import { Cloud, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-bold">
              <Cloud className="h-6 w-6 text-primary" />
              <span>GTS Cloud</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Seamless, secure cloud hosting for growing teams.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/cloud-hosting" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/dedicated-servers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="/services/managed-services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services/sftp-hosting" className="text-muted-foreground transition-colors hover:text-foreground">
                  SFTP Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">We Are Certified</h3>
            <div className="mb-4 space-y-2 text-sm text-muted-foreground">
              <p>ISO 27001 Certified</p>
              <p>ISO 9001 Certified</p>
              <p>ISO 14001 Certified</p>
              <p>PCI-DSS Compliant</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="mb-6">
          <h3 className="mb-4 text-sm font-semibold text-primary">GTS Cloud Partners</h3>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>Lenovo</span>
            <span>AMD</span>
            <span>Arista Networks</span>
            <span>Cloudflare</span>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} GTS Cloud. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" className="transition-colors hover:text-foreground">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
