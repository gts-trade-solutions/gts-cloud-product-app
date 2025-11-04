import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface HeroSplitProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  illustration?: ReactNode;
}

export function HeroSplit({ title, subtitle, primaryCta, secondaryCta, illustration }: HeroSplitProps) {
  return (
    <section className="border-b border-border bg-gradient-to-br from-background to-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                  >
                    {primaryCta.external ? (
                      <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                        {primaryCta.text}
                      </a>
                    ) : (
                      <a href={primaryCta.href}>{primaryCta.text}</a>
                    )}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {secondaryCta.external ? (
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                        {secondaryCta.text}
                      </a>
                    ) : (
                      <a href={secondaryCta.href}>{secondaryCta.text}</a>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
          {illustration && (
            <div className="flex items-center justify-center">
              {illustration}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
