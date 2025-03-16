/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "drive.google.com",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com", // Sometimes Google Drive serves images from this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  