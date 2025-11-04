export const metadata = {
  title: 'Cookies Policy | GTS Cloud',
  description: 'GTS Cloud Cookies Policy - How we use cookies and similar technologies.',
};

export default function CookiesPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold">Cookies Policy</h1>
        <p className="mb-8 text-muted-foreground">Last updated: October 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your device when you visit our website. They help
              us provide you with a better experience by remembering your preferences and understanding how you
              use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic functions
                  like page navigation, access to secure areas, and authentication. The website cannot function
                  properly without these cookies.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and
                  reporting information anonymously. This helps us improve our website and services.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies track your online activity to help us deliver more relevant advertising or to
                  limit how many times you see an advertisement. They may be set by us or third-party providers
                  whose services we use.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Cookie Management</h2>
            <p className="mb-4 text-muted-foreground">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies
              may impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies</li>
              <li>You can delete cookies that have already been set on your device</li>
              <li>You can set your browser to notify you when you receive a cookie</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              In addition to our own cookies, we may also use various third-party cookies to report usage
              statistics, deliver advertisements, and provide other services. These third parties have their
              own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookies Policy from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. Please revisit this page periodically to stay
              informed about our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about our use of cookies, please contact us at{' '}
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
