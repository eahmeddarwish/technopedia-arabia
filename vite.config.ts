// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export configuration for GitHub Pages hosting.
// - `spa` enables a SPA shell so navigating to any path (client-side) always boots the app.
// - `pages` lists every route we want prerendered as its own static HTML file.
// - `prerender.crawlLinks` follows internal <Link>s in case new routes are added later.
// Inside a Lovable build the nitro preset is forced to Cloudflare; the `preset` override
// below applies only outside the Lovable environment (e.g. a GitHub Actions build).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
    pages: [
      { path: "/" },
      { path: "/support" },
      { path: "/cv" },
      { path: "/projects" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
