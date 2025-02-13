import { posts } from '@/data/posts';
import { Post } from '@/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p: Post) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Ana Sayfa
        </Link>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-4">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{post.description}</p>
        </article>
      </div>
    </main>
  );
} 