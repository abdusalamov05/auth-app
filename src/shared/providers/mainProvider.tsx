"use client";

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./tanstackQueryProvider";
import { ThemeProvider } from "./themeProvider";
import { ToastProvider } from "./toastProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <ToastProvider />
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
