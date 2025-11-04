import Link from 'next/link';
import { Video as LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceTile {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface ServiceTilesProps {
  services: ServiceTile[];
  title?: string;
  subtitle?: string;
}

export function ServiceTiles({ services, title, subtitle }: ServiceTilesProps) {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="link"
                    className="px-0 text-primary hover:text-primary/80"
                  >
                    <Link href={service.href}>Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
