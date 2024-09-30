"use client";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { usePathname } from "next/navigation";
import { css } from "@pigment-css/react";

export function TopAppBar() {
  const path = usePathname();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={css({
                display: "inline-flex",
                gap: "4px",
                alignItems: "center",
              })}
            >
              <Icon variant={path === "/" ? "filled" : "outlined"} size={16}>
                home
              </Icon>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
