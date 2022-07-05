import type { Category } from "@prisma/client";

export interface Post {
    id: string;
    title: string;
    slug: string;
    categories: Category[];
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
