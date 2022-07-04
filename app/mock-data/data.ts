import type { Author, Post } from "~/models/posts";

const greta: Author = {
    name: "Greta Workman",
    username: "gretaworkman",
    thumbnail: "https://vercel.com/api/www/avatar/?u=greetah&s=72",
};

const lee: Author = {
    name: "Lee Robinson",
    username: "leeerob",
    thumbnail: "https://vercel.com/api/www/avatar/?u=leerob&s=72",
};

const bryce: Author = {
    name: "Bryce Kalow",
    username: "brkalow",
    thumbnail: "https://vercel.com/api/www/avatar/?u=brkalow&s=72",
};

const lydia: Author = {
    name: "Lydia Hallie",
    username: "lydiahallie",
    thumbnail: "https://vercel.com/api/www/avatar/?u=lydiahallie&s=72",
};

export const _POST_: Post[] = [
    {
        id: "ff727afc-1394-40e6-a84a-b124ce8c1de5",
        slug: "post-1",
        title: "Vercel Edge Middleware: Dynamic at the speed of static",
        category: "Company News",
        date: "2022-06-28",
        author: [greta, lee],
    },
    {
        id: "4c1e9bef-bac1-4a84-b63c-e064b7d86e44",
        slug: "post-2",
        title: "Introducing the Edge Runtime",
        category: "Engineering",
        date: "2022-06-21",
        author: [greta],
    },
    {
        id: "60c7bfd6-9afe-405a-bbe3-1c76bab3e9d1",
        slug: "post-3",
        title: "MongoDB and Vercel: from idea to global fullstack app in seconds",
        category: "State of the Web",
        date: "2022-06-13",
        author: [bryce, lee],
    },
    {
        id: "dba776c6-f9a7-43b7-b217-4f69b9b39906",
        slug: "post-4",
        title: "Monorepos are changing how teams build software",
        category: "Community",
        date: "2022-03-03",
        author: [lydia],
    },
];
