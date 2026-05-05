import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '해밀도서관',
  description: '도서관의 모든 서비스를 한 곳에서 이용하세요',
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
