import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '해밀도서관',
  description: '중리중학교 해밀도서관 서비스 포털',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '해밀도서관',
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#eef6fb] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
