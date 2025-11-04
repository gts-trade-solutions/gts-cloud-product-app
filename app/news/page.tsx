import { Newspaper, ExternalLink } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'News | GTS Cloud',
  description: 'Latest news and press releases from GTS Cloud.',
};

export default function NewsPage() {
  const newsItems = [
    {
      title: 'GTS Cloud Expands Data Center Presence in Asia-Pacific',
      source: 'TechCrunch',
      date: '2025-09-20',
      excerpt: 'GTS Cloud announces new data center locations in Tokyo and Sydney, expanding its global infrastructure footprint.',
      url: '#',
    },
    {
      title: 'New Partnership with Leading Security Provider',
      source: 'CloudTech News',
      date: '2025-09-10',
      excerpt: 'Strategic partnership brings enhanced DDoS protection and security services to GTS Cloud customers.',
      url: '#',
    },
    {
      title: 'GTS Cloud Achieves SOC 2 Type II Certification',
      source: 'Industry Wire',
      date: '2025-08-28',
      excerpt: 'Independent audit confirms GTS Cloud meets rigorous security and availability standards.',
      url: '#',
    },
    {
      title: 'Kubernetes Service Now Generally Available',
      source: 'DevOps Weekly',
      date: '2025-08-15',
      excerpt: 'Managed Kubernetes service exits beta, offering enterprise-grade container orchestration.',
      url: '#',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Latest News"
        subtitle="Stay up to date with GTS Cloud announcements, partnerships, and industry recognition."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <Newspaper className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Press & Media</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {newsItems.map((item, index) => (
              <Card key={index} className="flex flex-col border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-primary">{item.source}</span>
                    <time className="text-muted-foreground" dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    asChild
                    variant="link"
                    className="px-0 text-primary"
                  >
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Read Article <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
