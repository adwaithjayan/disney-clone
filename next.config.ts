import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'http',
        hostname:'image.tmdb.org'
      }
    ]
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
