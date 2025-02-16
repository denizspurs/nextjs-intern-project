import { BlogPost } from '@/types';
import data from '@/data/dummy.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = (data as BlogPost[]).find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
          >
            ← Ana Sayfaya Dön
          </Link>

          <div 
            className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full"
            style={{
              backgroundColor: getCategoryColor(post.category),
              color: 'white'
            }}
          >
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </div>

          <h1 className="text-3xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function getCategoryColor(category: BlogPost['category']): string {
  const colors = {
    sanat: '#F59E0B',     // Amber
    bilim: '#10B981',     // Emerald
    teknoloji: '#3B82F6',  // Blue
    felsefe: '#8B5CF6'     // Purple
  };
  return colors[category];
} 