import type { Category } from "@prisma/client";
import type { Author, Post } from "~/models/posts";
import { Link } from "react-router-dom";

const CircleAuthor = ({ author }: { author: Author }) => (
    <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full first:ml-0 ml-[-10px] border-2 border-black">
        <img src={author.thumbnail} alt={author.name} />
    </div>
);

export const StackPost = ({ post }: { post: Post }) => {
    return (
        <div className="mt-8 p-8 border-v-border border rounded-xl">
            <Link to={`/posts/${post.slug}`}>
                <h2 className="text-v-main-title font-bold max-w-2xl">
                    {post.title}
                </h2>
                <div className="flex items-center justify-between mt-12">
                    <div className="text-v-gray font-light text-v-small">
                        <div className="flex flex-wrap justify-start items-center">
                            {post.authors.map((author) => (
                                <CircleAuthor key={author.id} author={author} />
                            ))}
                        </div>
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p className="bg-v-bullet text-v-gray font-light text-[0.75rem] px-3 py-[10px] rounded-[32px]">
                        {post.categories
                            .map((category: Category) => category.name)
                            .join(", ")}
                    </p>
                </div>
            </Link>
        </div>
    );
};
