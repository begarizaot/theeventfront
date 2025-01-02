import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const noExternal =
  process.env.NODE_ENV !== "production"
    ? []
    : ["primereact", "react-helmet-async", "file-saver"];
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: { noExternal },
});
