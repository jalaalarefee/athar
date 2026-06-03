/**
 * Primary navigation items. `key` maps to a string in the `Nav` namespace and
 * `href` is locale-agnostic (the locale-aware <Link> adds the prefix).
 */
export const navLinks = [
  { key: "home", href: "/" },
  { key: "products", href: "/products" },
  { key: "artisans", href: "/artisans" },
  { key: "verify", href: "/verify" },
  { key: "about", href: "/about" },
] as const;

export type NavLinkKey = (typeof navLinks)[number]["key"];
