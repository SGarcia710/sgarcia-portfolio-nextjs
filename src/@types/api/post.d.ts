type Post = {
  id: string;
  description: string;
  featuredImage: string;
  type: 'react' | 'nextjs' | 'reactNative';
  title: string;
  slug: string;
  createdAt: Date;
  body: string;
  categories: PostCategory[];
};

type PostCategory = {
  title: string;
  uid: string;
};
