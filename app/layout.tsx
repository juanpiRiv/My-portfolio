import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "JuanpiRiv.Dev",
  description: "Portfolio de JuanpiRiv",
  icons: {
    icon: "/deployed-code-account.svg",

    apple: "/deployed-code-account.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-martian"}
      >
        {children}
      </body>
    </html>
  );
}
