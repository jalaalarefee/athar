import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import "../globals.css";
import { inter, tajawal } from "../fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  locales,
  localeDirections,
  routing,
  type Locale,
} from "@/i18n/routing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  const direction = localeDirections[locale];
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={direction}
      className={cn(inter.variable, tajawal.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-dvh bg-background text-foreground antialiased",
          direction === "rtl" ? "font-arabic" : "font-sans"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers direction={direction}>
            <div className="relative flex min-h-dvh flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
