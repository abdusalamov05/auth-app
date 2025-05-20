"use client";

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./tanstackQueryProvider";
import { ThemeProvider } from "./themeProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
