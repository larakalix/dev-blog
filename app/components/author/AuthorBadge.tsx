import { Link } from "react-router-dom";
import type { Author } from "~/models/posts";

export const AuthorBadge = ({ author }: { author: Author }) => {
    return (
        <div className="flex items-center">
            <img
                className="w-10 h-10 rounded-full mr-3"
                src={author.thumbnail}
                alt={author.name}
            />
            <div className="flex flex-col items-start flex-shrink-0 leading-4">
                <span className="text-v-small text-white font-extralight">
                    {author.name}
                </span>
                <a
                    href={`https://twitter.com/${author.username}`}
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-v-small font-extralight"
                >
                    @{author.username}
                </a>
            </div>
        </div>
    );
};
