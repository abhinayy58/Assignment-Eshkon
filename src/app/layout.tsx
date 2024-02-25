import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/features/RedexProvider";
import { Header } from "./components/Header";
import Wrapper from "./layouts/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eshkon Assignment",
  description: "This is assignment for Eshkon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <Wrapper>{children}</Wrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
