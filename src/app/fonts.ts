import { Inter, Tajawal } from "next/font/google";

// Latin / English UI font.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Arabic UI font. Tajawal is not a variable font, so weights are explicit.
export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});
