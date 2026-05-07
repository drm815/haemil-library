import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import QrCode from '@/components/QrCode';
import { services } from '@/config/services';

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? '';

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <div
        className="relative overflow-hidden text-white text-center px-6 py-10"
        style={{ background: 'linear-gradient(145deg, #0a5f96 0%, #0d7bbf 50%, #29a0e0 100%)' }}
      >
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/[0.06]" />
        <div className="absolute -bottom-14 -left-8 w-56 h-56 rounded-full bg-white/[0.04]" />
        <span className="text-5xl block mb-3 relative z-10">📚</span>
        <h1 className="text-2xl font-extrabold tracking-tight mb-2 relative z-10">해밀도서관</h1>
        <p className="text-sm opacity-85 leading-relaxed relative z-10">
          도서관의 모든 서비스를<br />한 곳에서 이용하세요
        </p>
      </div>

      {/* 서비스 카드 */}
      <p className="text-xs font-bold text-[#7aafcf] tracking-widest uppercase px-5 pt-6 pb-3">
        서비스 바로가기
      </p>
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>

      {/* QR 섹션 */}
      <p className="text-xs font-bold text-[#7aafcf] tracking-widest uppercase px-5 pt-2 pb-3">
        QR 코드
      </p>
      <div className="mx-4 mb-4 bg-white rounded-[18px] p-5 shadow-sm">
        <h2 className="text-sm font-bold text-[#1a2a3a] mb-1">핸드폰으로 바로 접속</h2>
        <p className="text-xs text-[#90a8be] mb-4">QR코드를 스캔하면 바로 이동해요</p>
        <div className="flex justify-center mb-4">
          <QrCode url={portalUrl} size={140} />
        </div>
        <Link
          href="/print"
          className="block w-full py-3 bg-[#e8f4fb] text-[#0d7bbf] text-center text-sm font-bold rounded-xl"
        >
          🖨️ 인쇄용 QR 페이지 보기
        </Link>
      </div>

      {/* 개인정보 안내 */}
      <div className="mx-4 mb-4 flex items-start gap-2.5 bg-[#f0f7ff] border border-[#c8dff0] rounded-2xl px-4 py-3.5">
        <span className="text-base mt-0.5">🔒</span>
        <p className="text-xs text-[#4a7a9b] leading-relaxed">
          본 서비스에서 수집되는 모든 개인정보는{' '}
          <a
            href="https://jungri.dge.ms.kr/jungrim/iv/indvdlView/selectIndvdlView.do"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#0d7bbf] underline underline-offset-2"
          >중리중학교 도서관 이용 개인정보처리방침</a>에 의거하여 처리됩니다.
        </p>
      </div>

      {/* 푸터 */}
      <footer className="text-center text-xs text-[#a0bece] border-t border-[#ddeef7] py-6 mt-2">
        중리중학교 해밀도서관 · 문의: 도서관 담당 선생님
      </footer>
    </main>
  );
}
