import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { SessionProvider } from "next-auth/react";
import { HeaderWrapper } from "./components/headerwrapper";

export const metadata: Metadata = {
  title: "Honeydreams Softwares",
  description: "Lets Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
