import type { Post } from "~/models/posts";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import { ErrorMessage } from "~/components/errors";
import MainHeader from "~/components/MainHeader";
import { StackPost } from "~/components/post";

export const loader: LoaderFunction = async ({ params }) => {
    const category = await db.category.findUnique({
        where: { slug: params.slug },
        include: { posts: true },
    });

    return { category };
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
    return <ErrorMessage error={error} />;
};

export default function PostCategory() {
    const { category } = useLoaderData();

    console.log(category);

    return (
        <div className="w-4/5 mt-12 mb-8">
            <ul className="flex items-center justify-between">
                <li>
                    <MainHeader text={category.name} />
                </li>
                <li></li>
            </ul>
            <div>
                {category.posts.map((post: Post) => (
                    <StackPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
