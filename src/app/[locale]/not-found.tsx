import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("Nav");

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-7xl font-bold text-accent">404</p>
      <p className="max-w-md text-muted-foreground">
        {t("brand")} — {t("tagline")}
      </p>
      <Button variant="accent" asChild>
        <Link href="/">{t("home")}</Link>
      </Button>
    </div>
  );
}
