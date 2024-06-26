interface DetailPost {
    userId: number;
    id: number;
    title: string;
    body: string
}

type Post = Omit<DetailPost, 'body'>

export type { Post, DetailPost }