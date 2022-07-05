import { Link } from "react-router-dom";
import type { Post } from "~/models/posts";

export const StackPost = ({ post }: { post: Post }) => {
    return (
        <div className="mt-8 p-8 border-v-border border rounded-xl">
            <Link to={`/posts/${post.slug}`}>
                <h2 className="text-v-main-title font-bold max-w-2xl">
                    {post.title}
                </h2>
                <div className="flex items-center justify-between mt-12">
                    <p className="text-v-gray font-light text-v-small">
                        {new Date(post.createdAt).toDateString()}
                    </p>
                    <p className="bg-v-bullet text-v-gray font-light text-[0.75rem] px-3 py-[10px] rounded-[32px]">
                        {post.category}
                    </p>
                </div>
            </Link>
        </div>
    );
};
