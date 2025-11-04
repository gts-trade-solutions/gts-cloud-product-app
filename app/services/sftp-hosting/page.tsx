import { FileText, Shield, Server, Lock, Clock, Zap, HardDrive } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'SFTP Hosting | GTS Cloud',
  description: 'Managed secure file transfer with dedicated host per client and enterprise authentication.',
};

export default function SftpHostingPage() {
  const features = [
    {
      icon: Server,
      title: '24×7 Support',
      description: 'Round-the-clock expert support for all your file transfer needs.',
    },
    {
      icon: Lock,
      title: 'Advanced Authentication',
      description: 'SSH keys, two-factor authentication, and LDAP/AD integration.',
    },
    {
      icon: Shield,
      title: 'Next-Gen Firewall',
      description: 'Advanced firewall protection with intrusion prevention.',
    },
    {
      icon: HardDrive,
      title: 'Managed Backups',
      description: 'Automated backups with configurable retention policies.',
    },
    {
      icon: Clock,
      title: 'High Availability',
      description: '99.99% uptime SLA with redundant infrastructure.',
    },
    {
      icon: Zap,
      title: 'Performance Storage',
      description: 'High-speed SSD storage for rapid file transfers.',
    },
    {
      icon: Server,
      title: 'Solution Management',
      description: 'Complete managed service including monitoring and maintenance.',
    },
    {
      icon: FileText,
      title: 'Dedicated Host',
      description: 'Each client gets a dedicated SFTP host for maximum isolation.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="SFTP Hosting"
        subtitle="Enterprise-grade secure file transfer hosting with dedicated infrastructure. Perfect for businesses requiring reliable, compliant file exchange."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Managed Secure File Sharing
          </h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            GTS Cloud SFTP Hosting provides enterprise-grade file transfer capabilities with
            complete management. Each client receives a dedicated host ensuring maximum security
            and performance isolation.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Comprehensive Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
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

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Why Choose Managed SFTP?
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Traditional SFTP setups require significant time and expertise to configure securely.
              With our managed SFTP hosting, you get enterprise-grade file transfer capabilities
              without the operational overhead.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Security Benefits</h3>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Dedicated isolated environment</li>
                  <li className="list-disc">Advanced authentication options</li>
                  <li className="list-disc">Automated security updates</li>
                  <li className="list-disc">Comprehensive audit logging</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Management Benefits</h3>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Zero infrastructure management</li>
                  <li className="list-disc">Automated backups and recovery</li>
                  <li className="list-disc">Proactive monitoring</li>
                  <li className="list-disc">Expert 24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Secure Your File Transfers"
        ctaText="Get Started"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
