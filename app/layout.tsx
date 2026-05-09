import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from 'next/font/google'
import Whatsapp from "@/componentes/whatsapp";

export const metadata: Metadata = {
  title: "My Dream Party Buffet | Festas e Eventos",
  description: "Buffet completo para festas infantis e eventos em Santos/SP. Espaço kids, cardápios especiais e estrutura premium para tornar seu evento inesquecível.",
  keywords: ["Buffet Santos", "Festa Infantil Santos", "Salão de Festas Santos", "My Dream Party", "Espaço Kids", "Eventos Santos", "Buffet Infantil Baixada Santista"],
  authors: [{ name: "My Dream Party Buffet" }],
  creator: "My Dream Party Buffet",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://my-dream-party.vercel.app",
    title: "My Dream Party Buffet | Festas e Eventos",
    description: "Buffet completo para festas infantis e eventos em Santos.",
    siteName: "My Dream Party Buffet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Dream Party Buffet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Dream Party Buffet | Festas e Eventos",
    description: "Buffet completo para festas infantis e eventos em Santos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={orbitron.className}>
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
