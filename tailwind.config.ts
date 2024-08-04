import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin';
import tailwindTypography from '@tailwindcss/typography';

export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    plugins: [
        flowbitePlugin,
        tailwindTypography
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                'display': ["Edu AU VIC WA NT Hand"]
            },
            colors: {
                /*
                primary: {
                    50: '#FFF5F2',
                    100: '#FFF1EE',
                    200: '#FFE4DE',
                    300: '#FFD5CC',
                    400: '#FFBCAD',
                    500: '#FE795D',
                    600: '#EF562F',
                    700: '#EB4F27',
                    800: '#CC4522',
                    900: '#A5371B'
                }*/
                secondary: {"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"},

                primary: {
                    "50": "#e9f2ec",
                    "100": "#d3e6d9",
                    "200": "#a7cdb3",
                    "300": "#7cb38e",
                    "400": "#509a68",
                    "500": "#248142",
                    "600": "#1d6735",
                    "700": "#164d28",
                    "800": "#0e341a",
                    "900": "#071a0d"
                }
            }
        }
    },
} as Config;