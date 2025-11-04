import { Server, Gauge, Lock, Zap, Shield, Code } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Cloud Hosting | GTS Cloud',
  description: 'Scalable VPS solutions with high performance and complete control.',
};

export default function CloudHostingPage() {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'NVMe SSD storage, enterprise CPUs, and high-speed networking for optimal performance.',
    },
    {
      icon: Gauge,
      title: 'Scalability',
      description: 'Scale resources up or down instantly to match your application demands.',
    },
    {
      icon: Code,
      title: 'Full Customization',
      description: 'Root access, custom software installations, and complete control over your environment.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'DDoS protection, firewalls, and automated security updates included.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Cloud Hosting"
        subtitle="Powerful VPS hosting with the flexibility you need and the performance you demand. Deploy in minutes, scale in seconds."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Did You Know?</h2>
            <div className="mx-auto max-w-2xl rounded-lg border border-primary/30 bg-primary/5 p-8">
              <p className="text-lg text-muted-foreground">
                Over 70% of businesses that migrate to cloud hosting report improved application
                performance and reduced operational costs. With GTS Cloud, you get enterprise-grade
                infrastructure at a fraction of the cost of traditional hosting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">VPS vs Dedicated Servers</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-6 w-6 text-primary" />
                  VPS Hosting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Virtual Private Servers offer the perfect balance of performance, flexibility, and cost.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Cost-effective for most workloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Instant provisioning and scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Flexible resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Perfect for dynamic workloads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-6 w-6 text-primary" />
                  Dedicated Servers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Bare metal servers provide maximum performance and complete hardware isolation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Maximum single-threaded performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Complete hardware isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Best for consistent heavy workloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Compliance requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} columns={4} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Supported Scripts & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-primary">
            <span>WordPress</span>
            <span>Joomla</span>
            <span>Drupal</span>
            <span>Magento</span>
            <span>PrestaShop</span>
            <span>Laravel</span>
            <span>Node.js</span>
            <span>Python</span>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start Your Cloud Hosting Journey"
        ctaText="Get Started"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
