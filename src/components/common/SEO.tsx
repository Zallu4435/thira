import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.png",
  noindex = false,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thira.in";

  return {
    title,
    description,
    keywords: keywords.join(", "),
    robots: noindex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Thira",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
