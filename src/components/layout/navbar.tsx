"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";
import { LanguageSwitcher } from "./language-switcher";

function BrandMark() {
  const t = useTranslations("Nav");
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary text-base font-bold text-primary shadow-sm">
        أ
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground">
          {t("brand")}
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent">
          {t("tagline")}
        </span>
      </span>
    </Link>
  );
}

function NavItems({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navLinks.map(({ key, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <li key={key}>
            <Link
              href={href}
              onClick={onNavigate}
              className={cn(
                "relative rounded-md px-1 py-2 text-sm font-medium transition-colors hover:text-accent",
                isActive ? "text-accent" : "text-muted-foreground"
              )}
            >
              {t(key)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <BrandMark />

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label={t("menu")}>
          <NavItems className="flex items-center gap-6" />
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/sign-in">{t("signIn")}</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href="/get-started">{t("getStarted")}</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("openMenu")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="end" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-start">{t("menu")}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8" aria-label={t("menu")}>
                <NavItems
                  onNavigate={() => setOpen(false)}
                  className="flex flex-col gap-1 text-base [&_a]:block [&_a]:py-2"
                />
              </nav>
              <div className="mt-8 flex flex-col gap-2">
                <SheetClose asChild>
                  <Button variant="outline" asChild>
                    <Link href="/sign-in">{t("signIn")}</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="accent" asChild>
                    <Link href="/get-started">{t("getStarted")}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
