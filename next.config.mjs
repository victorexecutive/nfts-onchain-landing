import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  outputFileTracingRoot: join(__dirname),
};

export default nextConfig;
