"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
