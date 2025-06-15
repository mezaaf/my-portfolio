import { PageContainer } from "@/components/layouts/PageContanier";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Mezaaf | Fullstack Developer",
  description: "This my portfolio website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.className}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
