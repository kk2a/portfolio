import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Theme } from "./components/Ui";

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
      <body>
        <Theme
          appearance="dark"
          accentColor="cyan"
          grayColor="slate"
          radius="large"
          scaling="100%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
