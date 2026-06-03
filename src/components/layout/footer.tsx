import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { navLinks } from "./nav-links";

export function Footer() {
  const t = useTranslations("Nav");
  const tf = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-sm font-bold text-primary">
              أ
            </span>
            <span className="text-base font-bold text-foreground">
              {t("brand")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{tf("madeIn")}</p>
        </div>

        <nav aria-label={t("menu")}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4">
          <p className="text-center text-xs text-muted-foreground">
            © {year} {t("brand")}. {tf("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
