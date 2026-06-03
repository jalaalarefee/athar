import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

/**
 * Maps each locale to its writing direction so layout components can set
 * `dir` on <html> and pick the correct font.
 */
export const localeDirections: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Always prefix the locale in the URL (e.g. /ar, /en) for clarity.
  localePrefix: "always",
});
