'use client';

import { Category } from '@/types';

const categories: Category[] = ['sanat', 'bilim', 'teknoloji', 'felsefe'];

interface CategoryFilterProps {
  value: Category | 'all';
  onChange: (category: Category | 'all') => void;
}

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="w-full md:w-1/3">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Category | 'all')}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
      >
        <option value="all">Tüm Kategoriler</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
} 