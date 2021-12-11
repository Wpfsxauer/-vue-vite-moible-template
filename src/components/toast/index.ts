import { createApp, App } from "vue";
import toast from "./index.vue";
import { toastOptionsFace } from "../../interface";

export function Toast(options: toastOptionsFace) {
    const parents: HTMLBodyElement | null = document.querySelector("body");
    const mountNode: HTMLDivElement = document.createElement("div");
    parents!.appendChild(mountNode);

    const app = createApp(toast, {
        ...options,
        remove() {
            app.unmount();
            parents!.removeChild(mountNode);
        },
    });

    return app.mount(mountNode);
}

Toast.install = (app: App) => {
    app.config.globalProperties.$Toast = Toast;
    app.provide("$Toast", Toast);
};
