export const metadata = {
  title: 'Terms & Conditions | GTS Cloud',
  description: 'GTS Cloud Terms & Conditions - General service use terms.',
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold">Terms & Conditions</h1>
        <p className="mb-8 text-muted-foreground">Last updated: October 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using GTS Cloud services, you agree to be bound by these Terms and Conditions.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Service Description</h2>
            <p className="text-muted-foreground">
              GTS Cloud provides cloud infrastructure services including compute instances, storage solutions,
              networking services, and related managed services. We reserve the right to modify, suspend, or
              discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Account Registration</h2>
            <p className="mb-4 text-muted-foreground">To use our services, you must:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Acceptable Use</h2>
            <p className="mb-4 text-muted-foreground">You agree not to use our services to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Engage in activities that harm our infrastructure or other users</li>
              <li>Attempt unauthorized access to our systems or other accounts</li>
              <li>Use our services for illegal or fraudulent purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Payment Terms</h2>
            <p className="text-muted-foreground">
              Services are billed according to the pricing plan you select. Payment is due in advance for the
              selected billing period. We reserve the right to suspend or terminate services for non-payment.
              All fees are non-refundable except as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Service Level Agreement</h2>
            <p className="text-muted-foreground">
              Our Service Level Agreement (SLA) guarantees specific uptime percentages for our services.
              If we fail to meet these commitments, you may be eligible for service credits as outlined
              in the SLA documentation available through your account portal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Data and Privacy</h2>
            <p className="text-muted-foreground">
              You retain ownership of your data stored on our platform. We will handle your data in accordance
              with our Privacy Policy. You are responsible for maintaining appropriate backups of your data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All intellectual property rights in our services, including software, documentation, and
              trademarks, remain our property or that of our licensors. You receive only a limited license
              to use our services as permitted by these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, GTS Cloud shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of our services.
              Our total liability shall not exceed the amount you paid for services in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate this agreement with appropriate notice. We may suspend or terminate
              your access immediately for violation of these terms. Upon termination, you must cease using
              our services and may lose access to your data unless you arrange for data export.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify you of significant
              changes through your account email or our website. Continued use of our services after
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of England and Wales.
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:legal@gtscloud.example" className="text-primary hover:underline">
                legal@gtscloud.example
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
