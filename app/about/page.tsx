import { Shield, Zap, Award, Building2, FileText, ServerCog, Server, Globe, CircleCheck as CheckCircle2 } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { ServiceTiles } from '@/components/service-tiles';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'About Us | GTS Cloud',
  description: 'Learn about GTS Cloud - your trusted provider focused on security, reliability, and performance.',
};

export default function AboutPage() {
  const dataCenterFeatures = [
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Advanced physical and digital security measures with 24/7 monitoring and access controls.',
    },
    {
      icon: Zap,
      title: 'High Availability',
      description: 'Tier 4 data center posture with 99.999%+ uptime guarantee and redundant power systems.',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'ISO 27001, ISO 9001, ISO 14001 certified with PCI-DSS compliant infrastructure.',
    },
    {
      icon: Building2,
      title: 'Hyperconverged Infrastructure',
      description: 'Next-generation technology combining compute, storage, and networking for superior performance.',
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
      title: 'Cloud Hosting',
      description: 'Scalable VPS with global data center reach.',
      href: '/services/cloud-hosting',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Your Trusted Cloud Infrastructure Partner"
        subtitle="GTS Cloud delivers enterprise-grade hosting solutions with a focus on security, reliability, and performance. We empower businesses to scale with confidence."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Data Centers</h2>
            <p className="text-lg text-muted-foreground">
              World-class infrastructure designed for maximum performance and reliability
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid features={dataCenterFeatures} columns={4} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">GTS Cloud Certified</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Committed to the highest standards of quality, security, and environmental responsibility
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
              <Award className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">Information Security Management</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
              <Award className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">ISO 9001</h3>
              <p className="text-sm text-muted-foreground">Quality Management Systems</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
              <Award className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">ISO 14001</h3>
              <p className="text-sm text-muted-foreground">Environmental Management</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
              <Shield className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">PCI-DSS</h3>
              <p className="text-sm text-muted-foreground">Payment Card Industry Compliant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Unlock Unmatched Features</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Experience the GTS Cloud difference with 24/7 expert support, enterprise-grade security,
              and lightning-fast performance. Our hyperconverged infrastructure delivers the speed and
              reliability your business demands, backed by industry-leading SLAs and certifications.
            </p>
            <div className="grid gap-4 text-left md:grid-cols-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Expert help when you need it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Top Security</h3>
                  <p className="text-sm text-muted-foreground">Multi-layered protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Blazing Speed</h3>
                  <p className="text-sm text-muted-foreground">Optimized infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTiles
        services={services}
        title="Latest Web Hosting Services"
        subtitle="Comprehensive solutions tailored to your needs"
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Cloud Portal</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Manage your entire cloud infrastructure from our intuitive portal. Deploy, monitor,
            and scale your resources with just a few clicks. Get started today and experience
            the power of GTS Cloud.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
