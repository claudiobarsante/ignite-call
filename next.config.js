/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
};

module.exports = nextConfig;

/**
 * to only generate route for files that ends with 'page.tsx', 'api.ts', 'api.tsx'
 * add --> pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'], so inside the pages folder
 * you can have files like styles.tsx
 */
