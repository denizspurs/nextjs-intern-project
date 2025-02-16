'use client';

import { BlogPost } from '@/types';
import data from '@/data/dummy.json';
import BlogList from '@/components/BlogList';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>(data as BlogPost[]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogPost['category'] | 'all'>('all');

  useEffect(() => {
    let filteredPosts = data as BlogPost[];

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }

    // Arama filtresi
    if (search) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setPosts(filteredPosts);
  }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Gökdeniz Öztürk
          </h1>
          <p className="text-gray-400 text-lg">
            ISTCODE STAJYER MULAKATI
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <SearchBar value={search} onChange={setSearch} />
            <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
          </div>

          <BlogList posts={posts} />
        </div>
      </div>
    </main>
  );
}
