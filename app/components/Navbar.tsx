import type { Category } from "@prisma/client";
import { Link } from "react-router-dom";

const nav = () => [{ href: "/", text: "Home" }];

export default function Navbar({ categories }: { categories: Category[] }) {
    return (
        <nav className="border-b border-[hsla(0,0%,100%,.1)]">
            <ul className="flex items-center justify-center my-4 select-none">
                {nav().map(({ href, text }) => (
                    <li
                        key={`nav-${text.toLowerCase()}`}
                        className="px-4 py-2 text-v-gray hover:text-white transition-colors"
                    >
                        <Link
                            to={href}
                            draggable={false}
                            className="cursor-default select-none font-light text-v-small"
                        >
                            {text}
                        </Link>
                    </li>
                ))}
                {categories.map(({ id, slug, name }: Category) => (
                    <li
                        key={id}
                        className="px-4 py-2 text-v-gray hover:text-white transition-colors"
                    >
                        <Link
                            to={`posts/category/${slug}`}
                            draggable={false}
                            className="cursor-default select-none font-light text-v-small"
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
