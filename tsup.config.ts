import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["./src/main.ts"],
	clean: true,
	splitting: false,
	dts: !options.watch,
	format: ["cjs", "esm"],
	minify: !options.watch,
}));
