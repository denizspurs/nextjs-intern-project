import { Post } from '@/types';
import Link from 'next/link';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id} className="transform hover:scale-105 transition-transform duration-200">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {post.description}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
} 