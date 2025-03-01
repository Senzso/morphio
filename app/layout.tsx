import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { CursorEffect } from '@/components/CursorEffect'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morpholution AI',
  description: 'Explore the future with Morpholution',
  icons: {
    icon: [
      { url: '/ai.jpg', sizes: '32x32', type: 'image/jpg' },
      { url: '/ai.jpg', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ai.jpg" sizes="any" />
        <link rel="icon" href="/ai.jpg" type="image/jpg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileImage" content="/icon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={inter.className}>
      <CursorEffect />
        {children}
        <Script id="icon-refresh">
          {`
            const refreshFavicon = () => {
              const link = document.querySelector("link[rel~='icon']");
              if (link) {
                link.href = \`/icon.png?v=\${new Date().getTime()}\`;
              }
            };
            window.onload = refreshFavicon;
          `}
        </Script>
      </body>
    </html>
  )
}

