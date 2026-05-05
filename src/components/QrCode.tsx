// src/components/QrCode.tsx
'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface Props {
  url: string;
  size?: number;
}

export default function QrCode({ url, size = 150 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !url) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 1,
      color: { dark: '#0a5f96', light: '#ffffff' },
    });
  }, [url, size]);

  if (!url) {
    return (
      <div
        style={{ width: size, height: size }}
        className="border-2 border-dashed border-[#c8dff0] rounded-xl flex items-center justify-center text-4xl text-[#c8dff0] bg-[#f5faff]"
      >
        ▦
      </div>
    );
  }

  return <canvas ref={canvasRef} className="rounded-xl" />;
}
