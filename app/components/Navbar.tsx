import { Link } from "react-router-dom";

const nav = () => [{ href: "/", text: "Home" }];

export default function Navbar() {
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
            </ul>
        </nav>
    );
}
