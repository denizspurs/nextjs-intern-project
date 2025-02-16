'use client';

import { BlogPost } from '@/types';
import Link from 'next/link';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link 
          href={`/post/${post.id}`} 
          key={post.id}
          className="block group"
        >
          <article className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full border border-gray-700">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full" 
                 style={{
                   backgroundColor: getCategoryColor(post.category),
                   color: 'white'
                 }}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </div>
            <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 line-clamp-3">
              {post.description}
            </p>
          </article>
        </Link>
      ))}
    </div>
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