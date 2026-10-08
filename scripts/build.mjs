import { copyFile, mkdir } from "node:fs/promises";

const output = new URL("../dist/", import.meta.url);
await mkdir(output, { recursive: true });
await copyFile(new URL("../Day.html", import.meta.url), new URL("index.html", output));
console.log("Day.html preparado en dist/index.html");
