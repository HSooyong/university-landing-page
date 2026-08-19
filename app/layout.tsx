import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Encode_Sans, IBM_Plex_Sans_KR, Geist_Mono } from 'next/font/google'
import './globals.css'

const plexKr = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-kr',
})

const encode = Encode_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-encode',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: '한경국립대학교 디자인예술스포츠학부 실용음악학전공 | 2027 신입생 모집',
  description:
    '소리의 미래, 여기서 시작됩니다. 한경국립대학교 디자인예술스포츠학부 실용음악학전공 2027학년도 수시 모집 안내 — 연주자, 미디어 작곡가, 음향엔지니어를 양성합니다.',
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
      className={`light ${plexKr.variable} ${encode.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
