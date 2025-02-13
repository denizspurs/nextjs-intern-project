'use client';

import { Category } from '@/types';
import { posts } from '@/data/posts';

interface CategoryFilterProps {
  value: Category | '';
  onChange: (value: Category | '') => void;
}

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  // Get unique categories with proper typing
  const categories = Array.from(
    new Set(posts.map((post: { category: Category }) => post.category))
  ) as Category[];

  return (
    <div className="w-full md:w-64 relative">
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Category | '')}
        className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                 appearance-none cursor-pointer"
      >
        <option value="">Kategoriler</option>
        {categories.map((category: Category) => (
          <option key={category} value={category} className="py-2">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
} 