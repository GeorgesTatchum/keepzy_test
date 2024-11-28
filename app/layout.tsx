import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tTFirsNeueTrialRegular = localFont({
  src: "./fonts/TTFirsNeueTrialRegular.ttf",
  variable: "--font-tt-firs-neue-trial",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tTFirsNeueTrialRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
