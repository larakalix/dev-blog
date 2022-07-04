import { useLoaderData } from "@remix-run/react";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { db } from "~/services/db";
import { ErrorMessage } from "~/components/errors";
import { PostContent, PostHeader } from "~/components/single-post";

export const loader: LoaderFunction = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            slug: params.id,
        },
        include: {
            authors: true,
        },
    });

    return { post };
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
    return <ErrorMessage error={error} />;
};

export default function SinglePost() {
    const { post } = useLoaderData();

    return (
        <>
            <PostHeader post={post} />
            <PostContent post={post} />
        </>
    );
}
