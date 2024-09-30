/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { styled } from "@pigment-css/react";

import "@/styles/globalStyles";
import "@pigment-css/react/styles.css";
import { fontBrand, fontPlain } from "@/styles/fonts";
import { Text } from "@/components/ui/Text";
import { TopAppBar } from "@/components/feat/TopAppBar";
import { PageTransition } from "@/components/feat/PageTransition";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <Body as="body">
        <TopAppBar />
        <PageTransition>{children}</PageTransition>
      </Body>
    </html>
  );
}

const Body = styled(Text)(({ theme }) => ({
  color: `hsl(${theme.vars.scheme.onSurface})`,
  background: `hsl(${theme.vars.scheme.surface})`,
}));
