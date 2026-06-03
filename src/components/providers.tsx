"use client";

import { DirectionProvider } from "@radix-ui/react-direction";

/**
 * Client-side providers. `DirectionProvider` lets Radix primitives (menus,
 * sheets, etc.) respond to RTL/LTR for keyboard navigation and positioning.
 * It lives in a Client Component because it relies on React context.
 */
export function Providers({
  direction,
  children,
}: {
  direction: "rtl" | "ltr";
  children: React.ReactNode;
}) {
  return <DirectionProvider dir={direction}>{children}</DirectionProvider>;
}
