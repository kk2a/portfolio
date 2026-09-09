import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "kk2a | Portfolio",
  description: "大阪公立大学工業高等専門学校に通う kk2a のポートフォリオ",
  icons: {
    icon: "/assets/IMG_4353.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
