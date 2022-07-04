export interface Post {
    id: string;
    title: string;
    slug: string;
    category: string;
    content: string;
    published: boolean;
    createdAt: string;
    authors: Author[];
}

export interface Author {
    id: string;
    name: string;
    username: string;
    thumbnail: string;
}
