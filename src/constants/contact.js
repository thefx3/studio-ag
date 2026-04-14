export const STUDIO_AG_INSTAGRAM_URL = "https://instagram.com/studioag";

export function resolveContactCtaUrl(destination) {
  return destination === "instagram"
    ? STUDIO_AG_INSTAGRAM_URL
    : "/contact";
}

export function getContactPageType(pathname) {
  if (pathname === "/about") return "aboutPage";
  if (pathname === "/studio") return "studioPage";
  if (pathname === "/services") return "servicesPage";
  return "homePage";
}
