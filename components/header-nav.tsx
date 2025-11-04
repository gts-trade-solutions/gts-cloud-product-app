'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Cloud, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Cloud className="h-6 w-6 text-primary" />
          <span>GTS Cloud</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  <li className="row-span-3">
                    <div className="mb-2 text-sm font-semibold text-primary">Compute</div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/linux-instances"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Linux Instances</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          High-performance Linux VMs
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/windows-instances"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Windows Instances</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Scalable Windows servers
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kubernetes"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Kubernetes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Managed container orchestration
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <div className="mb-2 text-sm font-semibold text-primary">Storage</div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/block-and-file-storage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Block & File Storage</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Persistent storage volumes
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/object-storage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Object Storage</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          S3-compatible storage
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/backups-and-snapshots"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Backups & Snapshots</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automated backup solutions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="mb-2 mt-3 text-sm font-semibold text-primary">Networking</div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/cloud-firewalls"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cloud Firewalls</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Network security layer
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/ddos-protection"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">DDoS Protection</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automated threat mitigation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/virtual-private-cloud"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Virtual Private Cloud</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Isolated network environments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/cloud-hosting"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cloud Hosting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Scalable VPS solutions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/dedicated-servers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Dedicated Servers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Bare metal performance
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/managed-services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Managed Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Full infrastructure management
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/sftp-hosting"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">SFTP Hosting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Secure file transfer hosting
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/partnership"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Partnership</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/news"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">News</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>GTS Cloud</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="products" className="border-b-0">
                    <AccordionTrigger className="text-base font-medium hover:text-primary py-2 hover:no-underline">
                      Products
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 pl-4 pt-2">
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-primary">Compute</div>
                          <Link
                            href="/linux-instances"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Linux Instances</div>
                            <div className="text-xs text-muted-foreground mt-1">High-performance Linux VMs</div>
                          </Link>
                          <Link
                            href="/windows-instances"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Windows Instances</div>
                            <div className="text-xs text-muted-foreground mt-1">Scalable Windows servers</div>
                          </Link>
                          <Link
                            href="/kubernetes"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Kubernetes</div>
                            <div className="text-xs text-muted-foreground mt-1">Managed container orchestration</div>
                          </Link>
                        </div>

                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-primary">Storage</div>
                          <Link
                            href="/block-and-file-storage"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Block & File Storage</div>
                            <div className="text-xs text-muted-foreground mt-1">Persistent storage volumes</div>
                          </Link>
                          <Link
                            href="/object-storage"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Object Storage</div>
                            <div className="text-xs text-muted-foreground mt-1">S3-compatible storage</div>
                          </Link>
                          <Link
                            href="/backups-and-snapshots"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Backups & Snapshots</div>
                            <div className="text-xs text-muted-foreground mt-1">Automated backup solutions</div>
                          </Link>
                        </div>

                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-primary">Networking</div>
                          <Link
                            href="/cloud-firewalls"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Cloud Firewalls</div>
                            <div className="text-xs text-muted-foreground mt-1">Network security layer</div>
                          </Link>
                          <Link
                            href="/ddos-protection"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">DDoS Protection</div>
                            <div className="text-xs text-muted-foreground mt-1">Automated threat mitigation</div>
                          </Link>
                          <Link
                            href="/virtual-private-cloud"
                            className="block text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">Virtual Private Cloud</div>
                            <div className="text-xs text-muted-foreground mt-1">Isolated network environments</div>
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="text-base font-medium hover:text-primary py-2 hover:no-underline">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-4 pt-2">
                        <Link
                          href="/services/cloud-hosting"
                          className="block text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">Cloud Hosting</div>
                          <div className="text-xs text-muted-foreground mt-1">Scalable VPS solutions</div>
                        </Link>
                        <Link
                          href="/services/dedicated-servers"
                          className="block text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">Dedicated Servers</div>
                          <div className="text-xs text-muted-foreground mt-1">Bare metal performance</div>
                        </Link>
                        <Link
                          href="/services/managed-services"
                          className="block text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">Managed Services</div>
                          <div className="text-xs text-muted-foreground mt-1">Full infrastructure management</div>
                        </Link>
                        <Link
                          href="/services/sftp-hosting"
                          className="block text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">SFTP Hosting</div>
                          <div className="text-xs text-muted-foreground mt-1">Secure file transfer hosting</div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="resources" className="border-b-0">
                    <AccordionTrigger className="text-base font-medium hover:text-primary py-2 hover:no-underline">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-4 pt-2">
                        <Link
                          href="/blog"
                          className="block text-sm font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Blog
                        </Link>
                        <Link
                          href="/partnership"
                          className="block text-sm font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Partnership
                        </Link>
                        <Link
                          href="/news"
                          className="block text-sm font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          News
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/career"
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </Link>

                <Link
                  href="/contact"
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button asChild className="bg-primary hover:bg-primary/90 mt-4">
                  <a href="https://portal.gtscloud.io/signup" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </a>
                </Button>

                <Button asChild className="bg-primary hover:bg-primary/90 mt-4">
                  <a href="https://portal.gtscloud.io/signup" target="_blank" rel="noopener noreferrer">
                    Sign Up
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Button asChild className="hidden lg:inline-flex bg-black hover:bg-black border border-red-500 text-white">
            <a href="https://portal.gtscloud.io/login" target="_blank" rel="noopener noreferrer">
              Sign In
            </a>
          </Button>
          <Button asChild className="hidden lg:inline-flex bg-primary hover:bg-primary/90">
            <a href="https://portal.gtscloud.io/signup" target="_blank" rel="noopener noreferrer">
              Sign Up
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
