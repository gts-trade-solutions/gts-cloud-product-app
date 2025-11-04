import { Server, Shield, Network, Code, Database, CircleCheck as CheckCircle2 } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Managed Services | GTS Cloud',
  description: 'Full infrastructure management including platform, security, and networking services.',
};

export default function ManagedServicesPage() {
  const pillars = [
    {
      icon: Server,
      title: 'Platform & Server Management',
      description: 'Complete server lifecycle management from provisioning to decommissioning.',
    },
    {
      icon: Shield,
      title: 'Security Suite',
      description: 'Comprehensive security including firewall management, patching, and threat monitoring.',
    },
    {
      icon: Network,
      title: 'Managed Networking',
      description: 'Network design, implementation, and ongoing optimization.',
    },
    {
      icon: Code,
      title: 'Technologies We Manage',
      description: 'Linux, Windows, databases, web servers, application stacks, and more.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Managed Services"
        subtitle="Focus on your business while we manage your infrastructure. Comprehensive managed services from server administration to security."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <FeatureGrid features={pillars} columns={4} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Consulting & Migrations
          </h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Our expert team guides you through every step of your cloud journey
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">1. Assessment</h3>
                  <p className="text-sm text-muted-foreground">Analyze current infrastructure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">2. Planning</h3>
                  <p className="text-sm text-muted-foreground">Design optimal architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">3. Preparation</h3>
                  <p className="text-sm text-muted-foreground">Set up target environment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">4. Testing</h3>
                  <p className="text-sm text-muted-foreground">Validate migration strategy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">5. Migration</h3>
                  <p className="text-sm text-muted-foreground">Execute the migration plan</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">6. Validation</h3>
                  <p className="text-sm text-muted-foreground">Verify all systems operational</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">7. Cutover</h3>
                  <p className="text-sm text-muted-foreground">Switch to new environment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">8. Optimization</h3>
                  <p className="text-sm text-muted-foreground">Fine-tune performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">9. Documentation</h3>
                  <p className="text-sm text-muted-foreground">Provide comprehensive docs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">10. Support</h3>
                  <p className="text-sm text-muted-foreground">Ongoing management & support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            What's Included
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <Server className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Server Management</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>OS installation & updates</li>
                <li>Performance monitoring</li>
                <li>Resource optimization</li>
                <li>Backup management</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Shield className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Security Management</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Firewall configuration</li>
                <li>Security patching</li>
                <li>Intrusion detection</li>
                <li>Compliance monitoring</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Database className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Database Management</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Database optimization</li>
                <li>Query performance tuning</li>
                <li>Backup & recovery</li>
                <li>Replication setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let Us Manage Your Infrastructure"
        ctaText="Get Started"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
