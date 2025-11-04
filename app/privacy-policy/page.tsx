export const metadata = {
  title: 'Privacy Policy | GTS Cloud',
  description: 'GTS Cloud Privacy Policy - How we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">Last updated: October 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground">
              GTS Cloud is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
            <p className="mb-4 text-muted-foreground">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Account information (name, email address, phone number)</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
              <li>Technical support inquiries</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
            <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Legal Bases for Processing</h2>
            <p className="text-muted-foreground">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Performance of a contract with you</li>
              <li>Compliance with legal obligations</li>
              <li>Our legitimate business interests</li>
              <li>Your consent (which you may withdraw at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Service providers who perform services on our behalf</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
              <li>Other parties in connection with a company transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your country of
              residence. We ensure appropriate safeguards are in place for such transfers in compliance with
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
            <p className="mb-4 text-muted-foreground">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@gtscloud.example" className="text-primary hover:underline">
                privacy@gtscloud.example
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
