import { Calendar, ArrowRight } from 'lucide-react';
import { HeroSplit } from '@/components/hero-split';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Blog | GTS Cloud',
  description: 'Latest insights, tutorials, and updates from the GTS Cloud team.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Getting Started with Kubernetes on GTS Cloud',
      date: '2025-09-15',
      excerpt: 'Learn how to deploy your first Kubernetes cluster on GTS Cloud with our step-by-step guide. We cover everything from initial setup to deploying your first application.',
      slug: 'getting-started-kubernetes',
    },
    {
      title: '5 Best Practices for Cloud Security',
      date: '2025-09-08',
      excerpt: 'Discover essential security practices to protect your cloud infrastructure. From network segmentation to identity management, we cover the fundamentals.',
      slug: 'cloud-security-best-practices',
    },
    {
      title: 'Optimizing Database Performance in the Cloud',
      date: '2025-09-01',
      excerpt: 'Maximize your database performance with these proven optimization techniques. Learn about indexing strategies, query optimization, and resource allocation.',
      slug: 'database-performance-optimization',
    },
    {
      title: 'Understanding Cloud Storage Options',
      date: '2025-08-25',
      excerpt: 'Confused about block, file, and object storage? This comprehensive guide breaks down the differences and helps you choose the right solution for your needs.',
      slug: 'cloud-storage-guide',
    },
  ];

  return (
    <>
      <HeroSplit
        title="GTS Cloud Blog"
        subtitle="Insights, tutorials, and updates from our team of cloud experts. Stay informed about the latest in cloud technology."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <Card key={index} className="flex flex-col border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="px-0 text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
