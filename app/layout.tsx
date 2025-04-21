import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "JuanpiRiv.Dev",
  description: "Portfolio profesional de Juan Pablo Rivero, desarrollador Full-Stack especializado en soluciones modernas con JavaScript, Java y más.",
  keywords: [
    "JuanpiRiv",
    "Juan Pablo Rivero",
    "Full Stack Developer",
    "Portfolio Developer",
    "Next.js Developer",
    "Java Developer",
    "Frontend",
    "Backend",
    "Desarrollador Web"
  ],
  authors: [{ name: "Juan Pablo Rivero", url: "https://my-portfolio-jpdev.vercel.app/" }],
  creator: "Juan Pablo Rivero",
  metadataBase: new URL("https://my-portfolio-jpdev.vercel.app/"),
  openGraph: {
    title: "JuanpiRiv.Dev | Full Stack Developer",
    description: "Descubre el portfolio de Juan Pablo Rivero, desarrollador Full-Stack con pasión por la tecnología y el desarrollo de software moderno.",
    url: "https://my-portfolio-jpdev.vercel.app/",
    siteName: "JuanpiRiv.Dev",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 666,
        alt: "Juan Pablo Rivero Portfolio",
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JuanpiRiv.Dev | Full Stack Developer",
    description: "Explorá el portfolio de Juan Pablo Rivero y descubrí su experiencia como Full Stack Developer.",
    images: ["/opengraph.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
