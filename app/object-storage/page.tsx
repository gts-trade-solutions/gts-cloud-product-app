import { Database, Zap, Globe } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { PricingCards, PricingPlan } from '@/components/pricing-cards';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Object Storage | GTS Cloud',
  description: 'S3-compatible object storage with global CDN integration and fast access.',
};

export default function ObjectStoragePage() {
  const features = [
    {
      icon: Database,
      title: 'S3-Compatible',
      description: 'Use existing S3 tools and SDKs for seamless adoption.',
    },
    {
      icon: Zap,
      title: 'Fast Access',
      description: 'Low-latency access with optional CDN integration for global distribution.',
    },
    {
      icon: Globe,
      title: 'Scalable',
      description: 'Store unlimited objects with automatic scaling and no capacity planning.',
    },
  ];

  const plans: PricingPlan[] = [
    {
      name: 'Standard',
      price: '$0.02/GB',
      description: 'General-purpose storage',
      features: [
        'S3-compatible API',
        'Unlimited objects',
        '99.9% availability',
        'Encryption at rest',
        'Lifecycle management',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
    },
    {
      name: 'Infrequent Access',
      price: '$0.01/GB',
      description: 'For less frequently accessed data',
      features: [
        'S3-compatible API',
        'Lower storage cost',
        'Retrieval fee applies',
        'Encryption at rest',
        'Lifecycle management',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
    },
    {
      name: 'Archive',
      price: '$0.004/GB',
      description: 'Long-term archival storage',
      features: [
        'Lowest storage cost',
        'Extended retrieval time',
        'Compliance ready',
        'Encryption at rest',
        'Lifecycle management',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Object Storage"
        subtitle="Store and serve any amount of data with our S3-compatible object storage. Perfect for backups, media files, and static content."
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
            Easy Migration & Integration
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our S3-compatible object storage makes migration simple. Use familiar tools like AWS CLI,
              SDKs, and popular libraries without code changes. Switch from other providers with minimal effort.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Migration Options</h3>
              <ul className="space-y-2 pl-6">
                <li className="list-disc"><strong>DIY Migration:</strong> Use standard S3 sync tools for quick transfers</li>
                <li className="list-disc"><strong>Guided Migration:</strong> Our team assists with large-scale migrations</li>
                <li className="list-disc"><strong>Hybrid Approach:</strong> Keep data in multiple locations during transition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PricingCards plans={plans} />

      <CtaBanner
        title="Start Storing Objects Today"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
