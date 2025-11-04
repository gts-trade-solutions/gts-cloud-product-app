import { HardDrive, Zap, Shield } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Block & File Storage | GTS Cloud',
  description: 'High-performance persistent storage with snapshots and replication options.',
};

export default function BlockAndFileStoragePage() {
  const features = [
    {
      icon: HardDrive,
      title: 'Persistent Volumes',
      description: 'Reliable block storage that persists independently of your instances.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'NVMe SSD-backed storage with low latency and high IOPS for demanding workloads.',
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Automated snapshots, replication options, and encryption at rest.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Block & File Storage"
        subtitle="Flexible, high-performance storage solutions for your cloud infrastructure. Scale storage independently and ensure data persistence."
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
            Enterprise Storage Solutions
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our block storage provides persistent, high-performance volumes that can be attached to
              your instances. Perfect for databases, applications, and any workload requiring consistent
              low-latency storage access.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Benefits</h3>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Independent scaling - adjust storage without changing compute resources</li>
                <li className="list-disc">Snapshot capabilities for point-in-time recovery</li>
                <li className="list-disc">Replication options for disaster recovery</li>
                <li className="list-disc">Encryption at rest and in transit</li>
                <li className="list-disc">Multi-attach support for shared storage scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Add Storage?"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
