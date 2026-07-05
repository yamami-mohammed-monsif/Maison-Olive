import { forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";

interface NavLinkCompatProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href" | "className"
> {
  href?: string;
  to?: string;
  className?:
    | string
    | ((state: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { className, activeClassName, pendingClassName, href, to, ...props },
    ref,
  ) => {
    const pathname = usePathname();
    const resolvedHref = href ?? to ?? "/";
    const isActive =
      pathname === resolvedHref ||
      (resolvedHref !== "/" && pathname.startsWith(`${resolvedHref}/`));
    const isPending = false;

    const resolvedClassName =
      typeof className === "function"
        ? className({ isActive, isPending })
        : className;

    return (
      <Link
        ref={ref}
        href={resolvedHref}
        className={cn(
          resolvedClassName,
          isActive && activeClassName,
          isPending && pendingClassName,
        )}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
