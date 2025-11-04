import { Shield, Zap, Activity } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { FeatureGrid } from '@/components/feature-grid';
import { FaqAccordion, FaqItem } from '@/components/faq-accordion';
import { CtaBanner } from '@/components/cta-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Cloud Firewalls | GTS Cloud',
  description: 'Next-generation firewall protection with unlimited scaling and proactive monitoring.',
};

export default function CloudFirewallsPage() {
  const features = [
    {
      icon: Shield,
      title: 'Extra Security Layer',
      description: 'Advanced firewall rules with application-level filtering and threat detection.',
    },
    {
      icon: Zap,
      title: 'Unlimited Scaling',
      description: 'Automatically scales to handle traffic surges without performance degradation.',
    },
    {
      icon: Activity,
      title: 'Proactive Monitoring',
      description: 'Real-time threat detection with automated response and detailed logging.',
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'How does the cloud firewall differ from instance-level firewalls?',
      answer: 'Cloud firewalls operate at the network level, protecting multiple instances with centralized rule management, while instance firewalls are configured per server.',
    },
    {
      question: 'Can I use my existing firewall rules?',
      answer: 'Yes, you can import existing rulesets and customize them through our portal or API.',
    },
    {
      question: 'What types of attacks does it protect against?',
      answer: 'Our firewall protects against common attacks including SQL injection, XSS, DDoS, port scanning, and more, with continuously updated threat intelligence.',
    },
  ];

  return (
    <>
      <HeroSplit
        title="Cloud Firewalls"
        subtitle="Enterprise-grade network security that scales with your infrastructure. Protect your applications with next-generation firewall technology."
        primaryCta={{
          text: 'Get Started',
          href: 'https://portal.gtscloud.example',
          external: true,
        }}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Choose From Our Providers</h2>
          <div className="mx-auto max-w-lg">
            <Card className="border-primary/50 shadow-lg shadow-primary/10">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Enterprise Firewall Suite</CardTitle>
                <CardDescription>Powered by industry-leading technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Next-generation firewall capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Intrusion prevention system (IPS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Advanced threat protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Real-time threat intelligence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Simple Monthly Pricing</h2>
          <div className="mx-auto max-w-md">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Cloud Firewall</CardTitle>
                <CardDescription>Per firewall instance</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Unlimited rules and policies</li>
                  <li>Unlimited bandwidth</li>
                  <li>Real-time monitoring and alerts</li>
                  <li>24/7 support included</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} />

      <CtaBanner
        title="Secure Your Infrastructure"
        ctaText="Sign Up Now"
        ctaHref="https://portal.gtscloud.example"
        external={true}
      />
    </>
  );
}
