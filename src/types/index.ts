export interface Post {
  id: string;
  title: string;
  description: string;
  category: Category;
}

export type Category = 'sanat' | 'bilim' | 'teknoloji' | 'felsefe'; 