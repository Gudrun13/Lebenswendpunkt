import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const siteTitle = "Lebenswendepunkt";
    document.title = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    const canonicalUrl = canonical ?? `https://lebenswendepunkt.de${window.location.pathname}`;
    setLink("canonical", canonicalUrl);

    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
    setMeta("property", "og:url", canonicalUrl);
    if (ogImage) setMeta("property", "og:image", ogImage);

    setMeta("name", "twitter:title", ogTitle ?? title);
    setMeta("name", "twitter:description", ogDescription ?? description);

    return () => {
      document.title = "Lebenswendepunkt – Gestärkt aus der Krise | Gudrun Murina";
      setMeta("name", "robots", "index, follow");
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, noIndex]);
}

function setMeta(attrName: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
