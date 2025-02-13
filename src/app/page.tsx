'use client';

import { useState } from 'react';
import { posts } from '@/data/posts';
import { Post, Category } from '@/types';
import PostList from '@/components/PostList';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | ''>('');

  const filteredPosts = posts.filter((post: Post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          İçerikler
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
          </div>
        </div>
        <div className="bg-transparent">
          <PostList posts={filteredPosts} />
        </div>
      </div>
    </main>
  );
}
