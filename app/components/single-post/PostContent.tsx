import type { Post } from "~/models/posts";
import { AuthorBadge } from "../author";

export const PostContent = ({ post }: { post: Post }) => {
    return (
        <div className="flex items-start justify-center px-6">
            <div className="w-3/4 p-20 pl-0">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, minus odit quas dolor labore doloremque eaque
                    saepe, animi non excepturi dolorum a esse quos? Nam porro,
                    consequuntur earum error optio, quibusdam sapiente minus qui
                    quis laborum deserunt eveniet nihil? Reprehenderit, ipsum
                    alias. Et, reprehenderit rem eveniet commodi, dolorum animi
                    illum accusantium suscipit aspernatur earum minima eum,
                    adipisci ipsa. Voluptate ipsum neque exercitationem esse
                    voluptas placeat maiores sunt totam error harum. Quas autem
                    cum quos debitis culpa eum magnam earum nisi accusamus ad!
                    Doloribus maiores veritatis, reiciendis ab autem nam commodi
                    consectetur quaerat esse dignissimos laudantium vel enim
                    eaque modi asperiores exercitationem natus veniam magnam?
                    Deserunt sit vero itaque provident, tempora, sed minima
                    voluptatum cupiditate laborum illo repudiandae est,
                    molestias eius.
                </p>
            </div>
            <div className="w-1/4 p-10 pt-20 border-l border-l-v-border h-full min-h-full">
                <span className="text-v-small text-v-gray font-extralight">
                    Posted by
                    {post.authors?.length > 0 &&
                        post.authors.map((author) => (
                            <div key={`author-${author.id}`} className="mt-5">
                                <AuthorBadge author={author} />
                            </div>
                        ))}
                    <div className="h-[30rem]"></div>
                </span>
            </div>
        </div>
    );
};
