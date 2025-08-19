import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';

type BlogParams = {
  params: { slug: string };
};

const posts: Record<string, { title: string; date: string; excerpt: string; image: string; content: string }> = {
  'future-of-ai-web-development': {
    title: 'The Future of AI in Web Development',
    date: '2024-01-15',
    excerpt: 'How AI is changing the way we build for the web.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content:
      'Artificial intelligence is rapidly transforming modern development workflows, from code generation to automated testing and personalization. At Africa Tech Studio, we leverage AI safely and responsibly to accelerate delivery while maintaining human oversight and quality standards. This is a placeholder article. Replace with your CMS or markdown content later.',
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: BlogParams) {
  const post = posts[params.slug];
  if (!post) return notFound();
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{new Date(post.date).toLocaleDateString()}</p>
        <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" />
        <p className="leading-7 text-lg mb-6">{post.excerpt}</p>
        <p className="leading-7 text-muted-foreground">{post.content}</p>
      </article>
      <Footer />
    </main>
  );
}


