import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import styles from "~/styles/app.css";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Layout = () => (
    <>
        <Navbar />
        <main className="flex items-center justify-center m-h-screen flex-col">
            <Outlet />
        </main>
        <Footer />
    </>
);

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="bg-black text-white">
                <Layout />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
