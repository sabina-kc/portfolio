// Kept in sync with next.config.ts. next/image does not automatically
// prefix `src` with `basePath` (only next/link and the router do), so
// public asset paths must be prefixed manually. This is a no-op locally
// and in `npm run start`; it only adds the "/portfolio" prefix when built
// in the GitHub Actions workflow for GitHub Pages.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
