import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Home Mate",
  description: "The home page for home mate web app",
};
const outfit = Outfit({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16 mt-1.5">
            <Header logo="logo.svg" />
            <Toaster />
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
