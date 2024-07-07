import type { Metadata } from "next";

import { Nunito } from "next/font/google";
import "./globals.css";
import Options from './components/infobar/Options';
import Infobar from "./components/infobar/Infobar";

const font = Nunito({
   subsets: ["latin"] }
  );

export const metadata: Metadata = {
  title: "Accordion",
  description: "TFG 23-24 component",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={font.className}>
          <Infobar />
        {children}
      </body>
    </html>
  );
}