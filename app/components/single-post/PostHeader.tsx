import type { Post } from "~/models/posts";

export const PostHeader = ({ post }: { post: Post }) => (
    <div className="w-full pt-20 pb-24 px-6 bg-single-post">
        <div>
            <div className="bg-bullet inline py-2 px-3 rounded-3xl font-extralight whitespace-nowrap text-v-small">
                {post.category}
            </div>
            <span className="text-v-small text-v-gray font-extralight ml-3">
                {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <h1 className="text-v-single-post-title tracking-[-.04em] leading-none font-bold mt-8">
            {post.title}
        </h1>
    </div>
);
