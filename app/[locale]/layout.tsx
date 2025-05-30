import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner"
import ConfettiProvider from "@/providers/confetti-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { I18nProviderClient } from "@/locales/client";


export const metadata: Metadata = {
  title: "UTELVTDEMY | Plataforma de aprendizaje",
  description: "Conectate desde donde estés y aprende a tu ritmo",
};

export default async function RootLayout({
  children,
  params ,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProviderClient locale={params.locale}>
              {children}
              <Toaster />
              <ConfettiProvider />
            </I18nProviderClient>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
