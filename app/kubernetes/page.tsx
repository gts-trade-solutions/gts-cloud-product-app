import { Box, Zap, Shield } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { FaqAccordion, FaqItem } from '@/components/faq-accordion';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Kubernetes | GTS Cloud',
  description: 'Managed Kubernetes clusters with enterprise-grade reliability and automatic scaling.',
};

export default function KubernetesPage() {
  const features = [
    {
      icon: Box,
      title: 'Managed Clusters',
      description: 'Fully managed Kubernetes with automated upgrades, patches, and monitoring.',
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Horizontal and vertical pod autoscaling to handle traffic spikes effortlessly.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in RBAC, network policies, and secrets management for production workloads.',
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What Kubernetes version do you support?',
      answer: 'We support the latest stable Kubernetes versions and provide automated upgrades with zero downtime.',
    },
    {
      question: 'Can I bring my existing Kubernetes configurations?',
      answer: 'Yes, you can migrate existing Kubernetes workloads using standard kubectl commands and manifests.',
    },
    {
      question: 'Is container registry included?',
      answer: 'Yes, a private container registry is included with all Kubernetes clusters for secure image storage.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Managed Kubernetes"
        subtitle="Deploy and manage containerized applications at scale. Enterprise-grade Kubernetes without the operational complexity."
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
            Production-Ready Container Orchestration
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Our managed Kubernetes service handles all the heavy lifting - from cluster provisioning
              to automated upgrades and scaling. Focus on deploying your applications while we manage
              the infrastructure.
            </p>
            <p>
              Built for reliability with high-availability control planes, automated backups, and
              disaster recovery. Your containerized workloads run on enterprise-grade infrastructure
              with 99.99% uptime SLA.
            </p>
            <p>
              Seamlessly integrate with our storage, networking, and security services. Deploy
              stateful applications with persistent volumes, implement network policies, and
              leverage built-in load balancing.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} />

      <CtaBanner
        title="Ready to Deploy Kubernetes?"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
