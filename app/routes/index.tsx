import type { Post } from "~/models/posts";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import type { Category } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import MainHeader from "~/components/MainHeader";
import { StackPost } from "~/components/post";
import { ErrorMessage } from "~/components/errors";

export const loader: LoaderFunction = async () => {
    const posts = await db.post.findMany({
        include: {
            categories: true,
            authors: true,
        },
    });

    return { posts };
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
    return <ErrorMessage error={error} />;
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
    const { posts } = useLoaderData();
    return (
        <>
            {/* <AllPosts posts={posts} /> */}
            <LatestPosts posts={posts} />
        </>
    );
}
