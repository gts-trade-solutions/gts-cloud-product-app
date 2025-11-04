import { Network, Lock, Zap } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { PricingCards, PricingPlan } from '@/components/pricing-cards';
import { FaqAccordion, FaqItem } from '@/components/faq-accordion';
import { CtaBanner } from '@/components/cta-banner';

export const metadata = {
  title: 'Virtual Private Cloud | GTS Cloud',
  description: 'Isolated networking with free intra-VPC data transfer and elastic SDN.',
};

export default function VirtualPrivateCloudPage() {
  const features = [
    {
      icon: Lock,
      title: 'Isolated Networking',
      description: 'Logically isolated network environments with complete control over IP addressing.',
    },
    {
      icon: Zap,
      title: 'Free Intra-VPC Transfer',
      description: 'No charges for data transfer between resources in the same VPC.',
    },
    {
      icon: Network,
      title: 'Elastic SDN',
      description: 'Software-defined networking with flexible routing and network segmentation.',
    },
  ];

  const plans: PricingPlan[] = [
    {
      name: 'General Purpose',
      price: 'From $49/mo',
      description: 'Balanced compute and memory',
      features: [
        '4 vCPU Cores',
        '8GB RAM',
        '160GB SSD Storage',
        '4TB Bandwidth',
        'VPC Networking',
        'Free intra-VPC transfer',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
    },
    {
      name: 'Memory-Intensive',
      price: 'From $89/mo',
      description: 'Optimized for memory workloads',
      features: [
        '4 vCPU Cores',
        '16GB RAM',
        '200GB SSD Storage',
        '4TB Bandwidth',
        'VPC Networking',
        'Free intra-VPC transfer',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
      popular: true,
    },
    {
      name: 'Compute-Intensive',
      price: 'From $79/mo',
      description: 'High-performance compute',
      features: [
        '8 vCPU Cores',
        '8GB RAM',
        '200GB SSD Storage',
        '5TB Bandwidth',
        'VPC Networking',
        'Free intra-VPC transfer',
      ],
      ctaText: 'Get Started',
      ctaHref: 'https://portal.gtscloud.example',
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What is a Virtual Private Cloud?',
      answer: 'A VPC is a logically isolated network environment where you have complete control over IP addressing, subnets, routing, and security. It provides network-level isolation for your resources.',
    },
    {
      question: 'Can I connect my VPC to my on-premises network?',
      answer: 'Yes, you can establish VPN connections or use dedicated interconnects to extend your on-premises network into your VPC.',
    },
    {
      question: 'How many subnets can I create?',
      answer: 'You can create up to 200 subnets per VPC, with flexible IP address ranges to organize your resources.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Virtual Private Cloud"
        subtitle="Create isolated network environments with complete control. Build secure, scalable architectures with software-defined networking."
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
            Complete Network Control
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              With GTS Cloud VPC, you define your own network topology using private IP address ranges.
              Create subnets, configure route tables, and set up network gateways to build
              sophisticated multi-tier architectures.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Capabilities</h3>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Custom IP address ranges (RFC 1918)</li>
                <li className="list-disc">Public and private subnets</li>
                <li className="list-disc">Network ACLs and security groups</li>
                <li className="list-disc">VPN and direct connect options</li>
                <li className="list-disc">VPC peering for multi-VPC architectures</li>
                <li className="list-disc">Flow logs for network monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PricingCards plans={plans} />

      <FaqAccordion items={faqs} />

      <CtaBanner
        title="Build Your Private Cloud"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
