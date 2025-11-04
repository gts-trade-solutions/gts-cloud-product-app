import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Contact Us | GTS Cloud',
  description: 'Get in touch with GTS Cloud. We are here to help with your cloud infrastructure needs.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSplit
        title="Get in Touch"
        subtitle="Have questions about our services? Our team is here to help. Reach out and let's discuss how GTS Cloud can support your business."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </h3>
                    <div className="space-y-2 pl-7 text-muted-foreground">
                      <p>
                        <strong>General Enquiries:</strong>{' '}
                        <a href="mailto:enquiries@gtscloud.example" className="text-primary hover:underline">
                          enquiries@gtscloud.example
                        </a>
                      </p>
                      <p>
                        <strong>Support:</strong>{' '}
                        <a href="mailto:support@gtscloud.example" className="text-primary hover:underline">
                          support@gtscloud.example
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <MapPin className="h-5 w-5 text-primary" />
                      Offices
                    </h3>
                    <div className="space-y-4 pl-7 text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">United Kingdom</p>
                        <p>123 Cloud Street</p>
                        <p>London, EC1A 1BB</p>
                        <p>United Kingdom</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">India</p>
                        <p>456 Tech Park</p>
                        <p>Bangalore, 560001</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex gap-4 pl-7">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Youtube className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
