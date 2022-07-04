export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-col py-8 bg-v-bullet text-white pt-8">
            <span className="text-v-small font-light text-v-gray">
                Copyright &copy; {new Date().getFullYear()}.{" "}
                <a
                    href="https://www.kalixthedev.com/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    kalixthedev
                </a>
            </span>
        </footer>
    );
}
