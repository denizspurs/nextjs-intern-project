import { Post } from '@/types';
import postsData from './dummy.json';

// Type assertion to ensure categories match the expected values
export const posts: Post[] = postsData.map(post => ({
  ...post,
  category: post.category as Post['category']
})); 