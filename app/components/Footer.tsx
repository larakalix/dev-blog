export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-col py-8 bg-gray-100">
            <span>Copyright &copy; {new Date().getFullYear()}</span>
            <p>
                <a
                    href="https://www.kalixthedev.com/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    kalixthedev
                </a>
            </p>
        </footer>
    );
}
