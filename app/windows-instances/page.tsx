import { Server, Zap, Shield } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { FaqAccordion, FaqItem } from '@/components/faq-accordion';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Windows Instances | GTS Cloud',
  description: 'Scalable Windows Server instances with full remote desktop access and enterprise licensing.',
};

export default function WindowsInstancesPage() {
  const features = [
    {
      icon: Server,
      title: 'Latest Windows Server',
      description: 'Run Windows Server 2019, 2022, or choose from previous versions for compatibility.',
    },
    {
      icon: Zap,
      title: 'Full RDP Access',
      description: 'Complete remote desktop access with administrator privileges for full control.',
    },
    {
      icon: Shield,
      title: 'Enterprise Licensing',
      description: 'Flexible licensing options including SPLA licensing for business applications.',
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What Windows versions are available?',
      answer: 'We offer Windows Server 2022, 2019, 2016, and 2012 R2. SQL Server and other Microsoft applications can be added upon request.',
    },
    {
      question: 'Is licensing included in the price?',
      answer: 'Yes, Windows Server licensing is included in all plans. Additional software licenses like SQL Server can be added as needed.',
    },
    {
      question: 'Can I use my own licenses?',
      answer: 'Yes, BYOL (Bring Your Own License) is supported for eligible Microsoft products through the License Mobility program.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Windows Instances"
        subtitle="Deploy Windows Server instances with full administrator access. Perfect for .NET applications, Active Directory, and Microsoft workloads."
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
            Optimized for Microsoft Workloads
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our Windows instances are optimized for Microsoft technologies, providing the perfect
              environment for .NET applications, IIS web servers, SQL Server databases, and more.
              With high-performance SSD storage and dedicated resources, your applications run smoothly.
            </p>
            <p>
              Security is built-in with automated Windows updates, integrated firewalls, and optional
              Active Directory integration. Deploy enterprise-grade Windows infrastructure without the
              hardware complexity.
            </p>
            <p>
              Scale your Windows environment effortlessly. Add resources dynamically, create snapshots
              for backup, and deploy multiple instances with consistent configurations.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} />

      <CtaBanner
        title="Ready to Deploy Windows Servers?"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
