import { Briefcase, Mail, Calendar } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Careers | GTS Cloud',
  description: 'Join the GTS Cloud team and help build the future of cloud infrastructure.',
};

export default function CareerPage() {
  const jobs = [
    {
      title: 'Senior Cloud Infrastructure Engineer',
      location: 'London, UK / Remote',
      type: 'Full-time',
      posted: '2025-09-15',
      description: 'Lead the design and implementation of scalable cloud infrastructure solutions for enterprise clients.',
      email: 'careers@gtscloud.example',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      posted: '2025-09-10',
      description: 'Build and maintain CI/CD pipelines, automate infrastructure provisioning, and optimize deployment processes.',
      email: 'careers@gtscloud.example',
    },
    {
      title: 'Customer Success Manager',
      location: 'London, UK',
      type: 'Full-time',
      posted: '2025-09-05',
      description: 'Guide customers through their cloud journey, ensuring they get maximum value from GTS Cloud services.',
      email: 'careers@gtscloud.example',
    },
    {
      title: 'Security Engineer',
      location: 'Remote',
      type: 'Full-time',
      posted: '2025-08-28',
      description: 'Strengthen our security posture through threat detection, incident response, and security architecture design.',
      email: 'careers@gtscloud.example',
    },
  ];

  const benefits = [
    'Work-life balance with flexible schedules',
    'Professional growth opportunities',
    'Flexible working arrangements (remote/hybrid)',
    'Private health insurance',
    'Competitive salary and equity options',
    'Learning and development budget',
    'Modern tech stack and tools',
    'Collaborative team environment',
  ];

  return (
    <>
      <HeroSplit
        title="Join Our Team"
        subtitle="Build the future of cloud infrastructure with us. We're looking for talented individuals who are passionate about technology and innovation."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <Briefcase className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Current Openings</h2>
            <p className="text-lg text-muted-foreground">
              Explore opportunities to grow your career with GTS Cloud
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job, index) => (
              <Card key={index} className="flex flex-col border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {job.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{job.location}</span>
                  </div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Posted{' '}
                      {new Date(job.posted).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={`mailto:${job.email}?subject=Application: ${job.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Benefits of Working With Us</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Don't See the Right Role?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We're always interested in hearing from talented individuals. Send us your CV and let us
            know how you could contribute to the GTS Cloud team.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="mailto:careers@gtscloud.example">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
