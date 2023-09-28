import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mir Saheem Shafi - Portfolio",
    short_name: "Mir Saheem Shafi",
    description: "Mir Saheem Shafi - Fullstack web developer",
    start_url: "/",
    display: "standalone",
    background_color: "#16171A",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
