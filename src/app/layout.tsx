import type { Metadata } from "next";
import { styled } from "@pigment-css/react";
import Link from "next/link";

import "@/styles/globals.css";
import "@pigment-css/react/styles.css";
import { fontBrand, fontPlain } from "@/styles/fonts";
import { Text } from "@/components/Text";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Lecrel | Home",
  description: "Your novel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontBrand.variable} ${fontPlain.variable}`}>
      <Body as="body">
        <header>
          <Link href="/">
            <Logo />
          </Link>
        </header>
        {children}
      </Body>
    </html>
  );
}

const Body = styled(Text)(({ theme }) => ({
  color: `hsl(${theme.vars.scheme.onSurface})`,
  background: `hsl(${theme.vars.scheme.surface})`,
}));
