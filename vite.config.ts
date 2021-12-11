import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import legacy from "./legacy";
const path = require("path");

// https://vitejs.dev/config/
// https://rollupjs.org/guide/en/#watch-options

interface envHandleFace {
    (mode: string): {
        isWatch: boolean;
        isLegacy: boolean;
    };
}

const envHandle: envHandleFace = (mode) => {
    dotenv.config({
        path: `.env.${mode}`,
    });

    for (const envName of Object.keys(process.env)) {
        process.env[envName] = process.env[envName].replace(/\\n/g, "\n");
    }

    return {
        isWatch: process.env.VITE_IS_WATCH === "true",
        isLegacy: process.env.VITE_IS_LEGACY === "true",
    };
};

export default defineConfig(({ mode }) => {
    const { isWatch, isLegacy } = envHandle(mode);

    return {
        base: "./",

        server: {
            port: 3000,
            open: true,
            proxy: {
                "/commercial": "https:pwebapp.58.com",
            },
            cors: true,
        },

        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        hack: `true; @import (reference) "${path.resolve(
                            `src/views/${mode}/App.less`
                        )}";`,
                    },
                    javascriptEnabled: true,
                },
            },
        },

        build: {
            outDir: "build",
            assetsDir: mode,
            chunkSizeWarningLimit: 200,
            assetsInlineLimit: 1024,
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    format: "iife",
                    entryFileNames: `${mode}/[name].js`,
                    chunkFileNames: `${mode}/[name].js`,
                    assetFileNames: `${mode}/[name][extname]`,
                },
            },
            watch: isWatch && {
                buildDelay: 0,
                clearScreen: true,
            },
        },

        plugins: [
            vue(),
            isLegacy &&
                legacy({
                    targets: ["> 1%, last 1 version, ie >= 11"],
                    additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
                }),
        ],

        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});
