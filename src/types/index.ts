export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: 'sanat' | 'bilim' | 'teknoloji' | 'felsefe';
}

export type Category = BlogPost['category']; 