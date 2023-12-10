import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serviços - Norwe Banking',
  description:
    'Aqui estão todos os serviços que Norwe Banking pode te ofecerer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto mb-16">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
