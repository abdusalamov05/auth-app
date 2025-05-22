import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { MainProvider } from "@/shared/providers";
import { ThemeToggle } from "@/shared/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная страница",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MainProvider>
          <div className="relative flex min-h-screen flex-col">
            <ThemeToggle />
            <div className="flex h-screen w-full items-center justify-center px-4">
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
