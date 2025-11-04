import { Button } from '@/components/ui/button';

interface CtaBannerProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  external?: boolean;
}

export function CtaBanner({ title, ctaText, ctaHref, external = false }: CtaBannerProps) {
  return (
    <section className="border-y border-border bg-gradient-to-r from-primary/10 to-accent/10 py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            {external ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaText}
              </a>
            ) : (
              <a href={ctaHref}>{ctaText}</a>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
