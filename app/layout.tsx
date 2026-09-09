import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Theme } from "./components/Ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://kk2a.github.io/portfolio/"),
  title: "kk2a | Portfolio",
  description: "kk2a's portfolio",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "kk2a | Portfolio",
    description: "kk2a's portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "kk2a's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "kk2a | Portfolio",
    description: "kk2a's portfolio",
    images: ["/og-image.jpg"],
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
