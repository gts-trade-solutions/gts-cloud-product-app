import { Server, Shield, Zap, Headphones, Database, ChartBar as BarChart3, HardDrive, Code, Lock, Globe, FileText, ServerCog } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { PricingCards, PricingPlan } from '@/components/pricing-cards';
import { ServiceTiles } from '@/components/service-tiles';
import { CtaBanner } from '@/components/cta-banner';

export default function HomePage() {
  const highlights = [
    {
      icon: Server,
      title: 'Tier 4 Data Centres',
      description: 'Enterprise-grade infrastructure with maximum reliability and redundancy.',
    },
    {
      icon: Shield,
      title: '99.999%+ Uptime Posture',
      description: 'Rock-solid availability backed by industry-leading SLAs.',
    },
    {
      icon: Zap,
      title: 'Hyperconverged Infrastructure',
      description: 'Next-generation technology for superior performance and efficiency.',
    },
    {
      icon: Headphones,
      title: '24/7 Ticket Support',
      description: 'Expert support team available around the clock for your peace of mind.',
    },
  ];

  const plans: PricingPlan[] = [
    {
      name: 'Regular',
      price: 'From $29/mo',
      description: 'Perfect for small projects',
      features: [
        '1 Custom Domain',
        '4GB RAM',
        '2 vCPU Cores',
        '80GB SSD Storage',
        '2TB Bandwidth',
        'Free SSL Certificate',
        'Daily Backups',
      ],
      ctaText: 'View Plan',
      ctaHref: 'https://portal.gtscloud.example',
    },
    {
      name: 'Starlight',
      price: 'From $79/mo',
      description: 'Best for growing businesses',
      features: [
        '3 Custom Domains',
        '8GB RAM',
        '4 vCPU Cores',
        '160GB SSD Storage',
        '4TB Bandwidth',
        'Free SSL Certificate',
        'Daily Backups',
        'Priority Support',
      ],
      ctaText: 'View Plan',
      ctaHref: 'https://portal.gtscloud.example',
      popular: true,
    },
    {
      name: 'Premium',
      price: 'From $149/mo',
      description: 'Enterprise-grade power',
      features: [
        'Unlimited Domains',
        '16GB RAM',
        '8 vCPU Cores',
        '320GB SSD Storage',
        '8TB Bandwidth',
        'Free SSL Certificate',
        'Hourly Backups',
        'Priority Support',
        'Dedicated Resources',
      ],
      ctaText: 'View Plan',
      ctaHref: 'https://portal.gtscloud.example',
    },
  ];

  const serverFeatures = [
    {
      icon: Server,
      title: 'Compute',
      description: 'Scalable virtual machines with enterprise-grade processors.',
    },
    {
      icon: Database,
      title: 'Database',
      description: 'Managed database solutions with automatic backups.',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Real-time insights into your infrastructure performance.',
    },
    {
      icon: HardDrive,
      title: 'Storage',
      description: 'Flexible storage options from block to object storage.',
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'APIs and SDKs for seamless integration.',
    },
    {
      icon: Lock,
      title: 'Next-Gen Firewalls',
      description: 'Advanced threat protection for your applications.',
    },
    {
      icon: Shield,
      title: 'Web App Security',
      description: 'Comprehensive security suite with DDoS protection.',
    },
    {
      icon: Globe,
      title: 'Cloud Management',
      description: 'Intuitive control panel for managing your infrastructure.',
    },
  ];

  const services = [
    {
      icon: FileText,
      title: 'SFTP Hosting',
      description: 'Secure file transfer with enterprise authentication.',
      href: '/services/sftp-hosting',
    },
    {
      icon: ServerCog,
      title: 'Managed Services',
      description: 'Full infrastructure management by our experts.',
      href: '/services/managed-services',
    },
    {
      icon: Server,
      title: 'Dedicated Servers',
      description: 'Bare metal performance for demanding workloads.',
      href: '/services/dedicated-servers',
    },
    {
      icon: Globe,
      title: 'GTS Cloud Hosting',
      description: 'Scalable VPS with global data center reach.',
      href: '/services/cloud-hosting',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Seamless, secure cloud hosting for growing teams."
        subtitle="High-performance infrastructure, rock-solid uptime, and support that scales with you."
        primaryCta={{
          text: 'Enquire Now',
          href: '#contact',
        }}
        secondaryCta={{
          text: 'Price Calculator',
          href: 'https://portal.gtscloud.example/pricing',
          external: true,
        }}
        illustration={
          <div className="relative h-64 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Server className="h-48 w-48 text-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <FeatureGrid features={highlights} columns={4} />

      <PricingCards plans={plans} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Server Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build, deploy, and scale your applications
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serverFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceTiles
        services={services}
        title="Latest Web Hosting Services"
        subtitle="Comprehensive solutions for every use case"
      />

      <CtaBanner
        title="Calculate Your Hosting Costs Instantly"
        ctaText="Get a Hosting Quote"
        ctaHref="https://portal.gtscloud.example/pricing"
        external={true}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Data Center Locations</h2>
            <p className="text-lg text-muted-foreground">
              Global infrastructure with strategic locations across continents
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex h-64 items-center justify-center rounded-lg border border-border bg-card">
              <Globe className="h-32 w-32 text-primary opacity-20" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Strategic Global Presence</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>North America: US East, US West, Canada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Europe: UK, Germany, France, Netherlands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Asia-Pacific: Singapore, Tokyo, Sydney, Mumbai</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>Middle East: Dubai</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Enhanced with CDN and DDoS protection partnerships for optimal global performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">We Are Certified</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Trusted by enterprises worldwide with industry-leading certifications
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-primary">
              <span>ISO 27001</span>
              <span>ISO 9001</span>
              <span>ISO 14001</span>
              <span>PCI-DSS</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Sign Up Today"
        ctaText="Get Started"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
