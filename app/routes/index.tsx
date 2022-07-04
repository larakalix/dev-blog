import type { Post } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Category } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import MainHeader from "~/components/MainHeader";
import { StackPost } from "~/components/post";

export const loader: LoaderFunction = async () => {
    const categories = await db.category.findMany();
    const posts = await db.post.findMany();

    return { categories, posts };
};

// const AllPosts = ({ posts }: { posts: Post[] }) => (
//     <div className="w-4/5 mb-8">
//         <ul className="flex items-center justify-between">
//             <li>
//                 <MainHeader text="Recent posts" />
//             </li>
//             <li>Feeds</li>
//         </ul>
//     </div>
// );

const LatestPosts = ({ posts }: { posts: Post[] }) => (
    <div className="w-4/5 mb-8">
        <ul className="flex items-center justify-between">
            <li>
                <MainHeader text="Latest" />
            </li>
            <li></li>
        </ul>
        <div>
            {posts.map((post) => (
                <StackPost key={post.id} post={post} />
            ))}
        </div>
    </div>
);

export default function Index() {
    const { categories, posts } = useLoaderData();
    return (
        <>
            <ul className="flex items-center justify-center space-x-4">
                {categories.map(({ id, slug, name }: Category) => (
                    <li key={id} className="p-4">
                        <Link to={`posts/category/${slug}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            {/* <AllPosts posts={posts} /> */}
            <LatestPosts posts={posts} />
        </>
    );
}
