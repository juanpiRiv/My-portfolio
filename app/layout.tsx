import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "JuanpiRiv.Dev",
  description: "Portfolio de JuanpiRiv",
  icons: {
    icon: "/favicon.ico",
  
    apple: "/apple-touch-icon.png",
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
