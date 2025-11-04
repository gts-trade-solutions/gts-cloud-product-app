import { Server, Zap, Shield, Globe, Clock, Wrench } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Dedicated Servers | GTS Cloud',
  description: 'Bare metal performance with complete control and enterprise-grade management.',
};

export default function DedicatedServersPage() {
  const whyDedicated = [
    {
      icon: Zap,
      title: 'Maximum Performance',
      description: 'No virtualization overhead - get 100% of hardware resources for your workloads.',
    },
    {
      icon: Shield,
      title: 'Complete Control',
      description: 'Full hardware access with custom BIOS settings and direct hardware management.',
    },
    {
      icon: Server,
      title: 'Predictable Resources',
      description: 'Guaranteed performance without noisy neighbor effects.',
    },
  ];

  const managedFeatures = [
    {
      icon: Shield,
      title: 'DDoS Posture',
      description: 'Always-on DDoS protection with multi-layered defense mechanisms.',
    },
    {
      icon: Globe,
      title: 'Global Data Centers',
      description: 'Deploy in strategic locations worldwide for low-latency access.',
    },
    {
      icon: Clock,
      title: 'Uptime SLAs',
      description: '99.99% uptime guarantee backed by service level agreements.',
    },
    {
      icon: Wrench,
      title: 'Rapid Hardware Replacement',
      description: '4-hour hardware replacement guarantee for critical components.',
    },
    {
      icon: Server,
      title: 'Direct Engineer Support',
      description: 'Talk directly to our infrastructure engineers for complex issues.',
    },
    {
      icon: Shield,
      title: 'Managed Security',
      description: 'Optional managed firewall, monitoring, and security services.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Dedicated Servers"
        subtitle="Unleash the full power of bare metal servers. Enterprise-grade hardware with complete control and optional managed services."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Why Choose Dedicated?</h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            When your workload demands maximum performance and complete hardware isolation,
            dedicated servers are the answer.
          </p>
        </div>
      </section>

      <FeatureGrid features={whyDedicated} columns={3} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Managed Dedicated Servers</h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Focus on your business while we handle the infrastructure complexity. Our managed
            dedicated server service includes comprehensive support and proactive monitoring.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {managedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready for Dedicated Power?"
        ctaText="Get Started"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
