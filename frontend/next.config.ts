import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Lock Turbopack to this package so nested lockfiles elsewhere on disk are not mistaken for the workspace root. */
const __dirname_config = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
    turbopack: {
        root: __dirname_config,
    },
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap/sitemap.xml",
            },
            {
                source: "/sitemap_:slug.xml",
                destination: "/api/sitemap/sitemap_:slug.xml",
            },
        ];
    },
    skipTrailingSlashRedirect: true,
};

export default nextConfig;
