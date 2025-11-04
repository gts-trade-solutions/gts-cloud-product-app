import { Server, Zap, Shield, Cpu } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { FaqAccordion, FaqItem } from '@/components/faq-accordion';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Linux Instances | GTS Cloud',
  description: 'High-performance Linux virtual machines with flexible configurations and enterprise-grade reliability.',
};

export default function LinuxInstancesPage() {
  const features = [
    {
      icon: Server,
      title: 'Flexible Configurations',
      description: 'Choose from a wide range of CPU, RAM, and storage options to match your workload requirements.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Enterprise-grade processors and NVMe SSD storage for lightning-fast performance.',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Built-in DDoS protection, firewalls, and automated security updates.',
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What Linux distributions are supported?',
      answer: 'We support all major distributions including Ubuntu, Debian, CentOS, Rocky Linux, AlmaLinux, and Fedora. Custom images are also available upon request.',
    },
    {
      question: 'Can I scale my instance resources?',
      answer: 'Yes, you can easily scale CPU, RAM, and storage resources up or down through our portal with minimal downtime.',
    },
    {
      question: 'What kind of support is included?',
      answer: '24/7 ticket support is included with all plans. Priority support with faster response times is available with our premium tiers.',
    },
    {
      question: 'Are backups included?',
      answer: 'Yes, automated daily backups are included with all plans. You can also create manual snapshots at any time.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Linux Instances"
        subtitle="Deploy scalable Linux virtual machines in seconds. Choose from multiple distributions with full root access and complete control."
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
            Enterprise-Grade Performance
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our Linux instances are built on cutting-edge hyperconverged infrastructure, delivering
              exceptional performance for demanding workloads. With enterprise-grade processors, NVMe SSD
              storage, and high-speed networking, your applications will run at peak efficiency.
            </p>
            <p>
              Every instance includes robust security features out of the box. From automated security
              patches to advanced firewall configurations, we ensure your infrastructure remains secure
              without the operational overhead.
            </p>
            <p>
              Scale effortlessly with our flexible resource allocation. Whether you're running development
              environments or production workloads, adjust your resources in real-time to match demand.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} />

      <CtaBanner
        title="Ready to Deploy Linux Instances?"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
