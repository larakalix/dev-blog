/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "v-gray": "#888",
                "v-border": "#333",
                "v-bullet": "#111",
            },
            fontSize: {
                "v-small": "0.875rem",
                "v-main-title": "2rem",
                "v-single-post-title": "6.25rem",
            },
        },
    },
    plugins: [],
};
