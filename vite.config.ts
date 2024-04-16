import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	// base: 'process.env.NODE_ENV === "production" ? "/interview_0415/" : "/interview_0415/"',
	base: "/interview_0415/",
	plugins: [react()],
});