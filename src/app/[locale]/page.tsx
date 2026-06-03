import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ShieldCheck, Users, Landmark, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const features = [
  { key: "provenance", Icon: ShieldCheck },
  { key: "artisans", Icon: Users },
  { key: "heritage", Icon: Landmark },
] as const;

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering for this server component.
  setRequestLocale(locale);
  const t = useTranslations("Home");

  return (
    <div className="relative overflow-hidden">
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-20 end-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <section className="container flex flex-col items-center gap-8 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
          <ShieldCheck className="h-3.5 w-3.5" />
          {t("badge")}
        </span>

        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="accent" asChild>
            <Link href="/verify" className="gap-2">
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/artisans">{t("ctaSecondary")}</Link>
          </Button>
        </div>
      </section>

      <section className="container grid gap-6 pb-24 md:grid-cols-3">
        {features.map(({ key, Icon }) => (
          <div
            key={key}
            className="group rounded-2xl border border-border/60 bg-card p-6 text-start transition-colors hover:border-accent/40"
          >
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {t(`features.${key}.title`)}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(`features.${key}.description`)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
