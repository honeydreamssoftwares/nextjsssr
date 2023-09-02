import './globals.css'
import type { Metadata } from "next";
import Header from "./components/header";

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
        <Header />

        {children}
      </body>
    </html>
  );
}
