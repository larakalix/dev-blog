import { Link } from "react-router-dom";

const nav = () => [
    { href: "/", text: "Home" },
    { href: "/posts", text: "Posts" },
];

export default function Navbar() {
    return (
        <nav>
            <ul className="flex items-center justify-center my-4 select-none">
                {nav().map(({ href, text }) => (
                    <li
                        key={`nav-${text.toLowerCase()}`}
                        className="px-4 py-2 text-black"
                    >
                        <Link to={href} draggable={false} className="cursor-default select-none">
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
