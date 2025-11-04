import { Shield, Zap, Globe } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'DDoS Protection | GTS Cloud',
  description: 'Native DDoS protection with automated mitigation and coverage for varied attacks.',
};

export default function DdosProtectionPage() {
  const features = [
    {
      icon: Shield,
      title: 'Native Protection',
      description: 'Built-in DDoS protection at the network edge with always-on monitoring.',
    },
    {
      icon: Zap,
      title: 'Automated Mitigation',
      description: 'Instant detection and mitigation of attacks without manual intervention.',
    },
    {
      icon: Globe,
      title: 'Comprehensive Coverage',
      description: 'Protection against volumetric, protocol, and application-layer attacks.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Service Availability',
      description: 'Keep your services online during attacks with automatic traffic filtering.',
    },
    {
      icon: Shield,
      title: 'Business Continuity',
      description: 'Maintain operations without downtime or performance degradation.',
    },
    {
      icon: Globe,
      title: 'Customer Trust',
      description: 'Protect your reputation by ensuring consistent service availability.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="DDoS Protection"
        subtitle="Enterprise-grade DDoS protection built into every GTS Cloud service. Defend against the largest attacks with automated mitigation."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Multi-Layer Protection
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our DDoS protection operates at multiple layers of the network stack, defending against
              volumetric attacks, protocol exploits, and sophisticated application-layer threats.
              With distributed scrubbing centers worldwide, we can absorb and mitigate attacks before
              they reach your infrastructure.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Attack Coverage</h3>
              <ul className="space-y-2 pl-6">
                <li className="list-disc"><strong>Volumetric Attacks:</strong> UDP floods, ICMP floods, DNS amplification</li>
                <li className="list-disc"><strong>Protocol Attacks:</strong> SYN floods, fragmented packet attacks, Ping of Death</li>
                <li className="list-disc"><strong>Application Layer:</strong> HTTP floods, Slowloris, zero-day exploits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Protect Your Services Now"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
