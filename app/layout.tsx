import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: '한경국립대학교 디자인예술스포츠학부 실용음악학전공 | 2027 신입생 모집',
  description:
    '수도권 유일 국립 4년제 실용음악학전공. 소리의 미래, 여기서 시작됩니다. 한경국립대학교 디자인예술스포츠학부 2027학년도 수시 모집 안내.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0b48a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`light ${jakarta.variable} ${geistMono.variable} bg-background`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
