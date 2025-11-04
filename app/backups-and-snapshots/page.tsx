import { Save, Clock, Shield } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Backups & Snapshots | GTS Cloud',
  description: 'Automated backups with fast recovery, encrypted storage, and console/API access.',
};

export default function BackupsAndSnapshotsPage() {
  const features = [
    {
      icon: Clock,
      title: 'Scheduled Backups',
      description: 'Automated daily, weekly, or custom backup schedules with retention policies.',
    },
    {
      icon: Save,
      title: 'Fast Recovery',
      description: 'Restore entire instances or individual files quickly from any backup point.',
    },
    {
      icon: Shield,
      title: 'Encrypted Storage',
      description: 'All backups encrypted at rest with secure access controls.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Backups & Snapshots"
        subtitle="Protect your data with automated backups and instant snapshots. Recover quickly from any point in time with enterprise-grade backup solutions."
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
            Comprehensive Backup Features
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our backup and snapshot service provides peace of mind with automated, reliable data
              protection. Create point-in-time snapshots for quick rollbacks or schedule regular
              backups for long-term data retention.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Key Benefits</h3>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Automated backup scheduling</li>
                  <li className="list-disc">Instant snapshot creation</li>
                  <li className="list-disc">Flexible retention policies</li>
                  <li className="list-disc">Cross-region backup replication</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Access Options</h3>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Web console management</li>
                  <li className="list-disc">API automation</li>
                  <li className="list-disc">CLI tools</li>
                  <li className="list-disc">Integration with CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Simple Pricing</h2>
          <div className="mx-auto max-w-2xl">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Backup Storage</CardTitle>
                <CardDescription>Pay only for what you use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Storage</span>
                    <span className="text-2xl font-bold">$0.05/GB/month</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Includes encryption, compression, and automated retention management</p>
                    <p>No additional fees for snapshots or restore operations</p>
                    <p>Cross-region replication available for additional cost</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Protect Your Data Today"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
