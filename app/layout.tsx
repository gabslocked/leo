import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Formulário de Contato - Leo Siqueira | Deputado Estadual',
  description: 'Entre em contato com o Gabinete do Deputado Leo Siqueira. Envie sua demanda, sugestão ou solicite uma conversa. Nossa equipe analisará sua solicitação e retornará o mais breve possível.',
  keywords: ['Leo Siqueira', 'Deputado', 'São Paulo', 'SP', 'Contato', 'Gabinete', 'Política'],
  authors: [{ name: 'Gabinete Leo Siqueira' }],
  creator: 'Gabinete Leo Siqueira',
  publisher: 'Gabinete Leo Siqueira',
  metadataBase: new URL('https://contato.leonardosiqueirabr.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://contato.leonardosiqueirabr.com.br',
    title: 'Formulário de Contato - Leo Siqueira | Deputado Estadual',
    description: 'Entre em contato com o Gabinete do Deputado Leo Siqueira. Envie sua demanda, sugestão ou solicite uma conversa.',
    siteName: 'Leo Siqueira - Deputado Estadual',
    images: [
      {
        url: '/images/hero-background-desktop.png',
        width: 1200,
        height: 630,
        alt: 'Leo Siqueira - Deputado Estadual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulário de Contato - Leo Siqueira | Deputado Estadual',
    description: 'Entre em contato com o Gabinete do Deputado Leo Siqueira. Envie sua demanda, sugestão ou solicite uma conversa.',
    images: ['/images/hero-background-desktop.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
