import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/themeProvider";


export const metadata: Metadata = {
  title: "Disny Plus Clone",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white dark:bg-[#1a1c29]`}
      >
        <ThemeProvider attribute='class' defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header/>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
