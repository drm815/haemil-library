import Link from 'next/link';
import QrCode from '@/components/QrCode';

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? '';

export default function PrintPage() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen px-4 py-5 print:bg-white print:p-0">

      {/* A4 시트 */}
      <div className="bg-white rounded-[20px] overflow-hidden shadow-lg max-w-xl mx-auto print:shadow-none print:rounded-none">

        {/* 헤더 */}
        <div
          className="relative overflow-hidden text-white text-center px-7 py-8"
          style={{ background: 'linear-gradient(135deg, #0a5f96 0%, #29a0e0 100%)' }}
        >
          <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-white/[0.07]" />
          <div className="absolute -bottom-16 -left-10 w-60 h-60 rounded-full bg-white/[0.05]" />
          <span className="text-4xl block mb-2 relative z-10">📚</span>
          <h1 className="text-2xl font-extrabold tracking-tight mb-1.5 relative z-10">해밀도서관</h1>
          <p className="text-sm opacity-85 relative z-10 mb-4">QR코드를 스캔하면 바로 이동해요</p>

          {/* 이용시간 배지 */}
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-xl px-5 py-2.5 relative z-10">
            <span className="text-lg">🕗</span>
            <div className="text-left">
              <div className="text-[11px] opacity-80 font-semibold tracking-wide">도서관 이용시간</div>
              <div className="text-lg font-extrabold tracking-wider">08:00 ~ 16:20</div>
            </div>
          </div>
        </div>

        {/* QR 카드 */}
        <div className="py-8 flex justify-center">
          <div className="bg-[#f5faff] border-[1.5px] border-[#d4eaf7] rounded-2xl px-10 py-7 flex flex-col items-center gap-3">
            <span className="text-2xl">🏠</span>
            <QrCode url={portalUrl} size={150} />
            <p className="text-base font-bold text-[#1a2a3a]">해밀도서관 포털</p>
            <p className="text-sm text-[#90a8be]">모든 서비스를 한 번에</p>
          </div>
        </div>

      </div>

      {/* 돌아가기 버튼 (인쇄 시 숨김) */}
      <Link
        href="/"
        className="block max-w-xl mx-auto mt-4 py-3 bg-white text-[#0d7bbf] text-center text-sm font-bold rounded-2xl shadow-sm print:hidden"
      >
        ← 메인으로 돌아가기
      </Link>
    </div>
  );
}
