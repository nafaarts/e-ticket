import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

import "moment/locale/id";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "E-Ticket - Beli Tiket Online Mudah dan Aman",
  description:
    "Beli tiket event, pesawat, bus, dan kapal laut secara online dengan mudah dan aman. Dapatkan harga tiket terbaik hanya di E-Ticket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
