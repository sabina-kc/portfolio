import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages (no Node server there).
// basePath/assetPrefix are only needed when served from https://sabina-kc.github.io/portfolio/;
// leave them off for local dev and for a future custom domain.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? repoBasePath : "",
  assetPrefix: isGithubActions ? `${repoBasePath}/` : "",
  env: {
    // Consumed by src/lib/base-path.ts to prefix next/image `src` values,
    // since next/image (unlike next/link) does not do this automatically.
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? repoBasePath : "",
  },
};

export default nextConfig;
