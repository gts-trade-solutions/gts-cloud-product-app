import { Handshake } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Partnership | GTS Cloud',
  description: 'Our trusted partners helping us deliver world-class cloud infrastructure.',
};

export default function PartnershipPage() {
  const partners = [
    {
      name: 'Lenovo',
      description: 'Leading technology company providing enterprise-grade server hardware and infrastructure solutions.',
      category: 'Hardware Partner',
    },
    {
      name: 'AMD',
      description: 'High-performance computing and graphics processor technology powering our infrastructure.',
      category: 'Technology Partner',
    },
    {
      name: 'Arista Networks',
      description: 'Cloud networking solutions enabling our high-speed, reliable network infrastructure.',
      category: 'Network Partner',
    },
    {
      name: 'Cloudflare',
      description: 'Global CDN and security services enhancing our DDoS protection and content delivery.',
      category: 'Security Partner',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Our Partners"
        subtitle="GTS Cloud partners with industry leaders to deliver world-class infrastructure. Together, we provide the performance, security, and reliability you deserve."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <Handshake className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technology Partners</h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with the best to bring you exceptional cloud services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              <Card key={index} className="border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {partner.category}
                  </div>
                  <CardTitle className="text-2xl">{partner.name}</CardTitle>
                  <CardDescription className="text-base">{partner.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Become a Partner</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Interested in partnering with GTS Cloud? We're always looking for innovative companies
            to collaborate with. Reach out to our partnerships team to explore opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            Contact Us <Handshake className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
