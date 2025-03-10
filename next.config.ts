import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["antd"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "upgrade-insecure-requests; default-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: blob: 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
