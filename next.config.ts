import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "crests.football-data.org",
      "thafootballbucket.s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
