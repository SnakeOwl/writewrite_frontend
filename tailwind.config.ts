import type { Config } from "tailwindcss";

const config: Config = {

    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [function ({ addBase, theme }:
        { addBase: any, theme: any }) {
        addBase({
            // "*:not(.text-editor-tail)": {
            //     fontSize: "16px",
            // },

            'h1, .h1': {
                fontSize: theme('fontSize.4xl'),
            },
            'h2, .h2': {
                fontSize: theme('fontSize.3xl'),
            },
            'h3, .h3': {
                fontSize: theme('fontSize.2xl'),
            },
            'h4, .h4': {
                fontSize: theme('fontSize.xl'),
            },
            'h5, .h5': {
                fontSize: theme('fontSize.lg'),
            },
            'h6, .h6': {
                fontSize: theme('fontSize.md'),
            },

            'a:hover': {
                color: theme('colors.sky.500'),
            },

            
            '@media (prefers-color-scheme: dark)': {
                // стили для тёмной темы

                "a:hover": {
                    color: theme("colors.sky.400"),
                }
            },


        })
    }],
};
export default config;
