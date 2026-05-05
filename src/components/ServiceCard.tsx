// src/components/ServiceCard.tsx
import { Service } from '@/config/services';

const colorMap: Record<string, { icon: string; arrow: string; border: string }> = {
  sky:    { icon: 'bg-[#e0f3ff]', arrow: 'text-[#0d7bbf]', border: 'hover:border-[#b8ddf5]' },
  teal:   { icon: 'bg-[#d6f5f0]', arrow: 'text-[#0aab90]', border: 'hover:border-[#b8ddf5]' },
  indigo: { icon: 'bg-[#e8eaff]', arrow: 'text-[#4c5fd5]', border: 'hover:border-[#b8ddf5]' },
  slate:  { icon: 'bg-[#edf0f5]', arrow: 'text-[#7a92a8]', border: 'hover:border-[#b8ddf5]' },
};

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const c = colorMap[service.color];

  if (service.status === 'coming') {
    return (
      <div className="bg-white rounded-[18px] p-5 flex flex-col gap-2 opacity-55 shadow-sm border border-transparent">
        <div className={`w-11 h-11 rounded-[14px] ${c.icon} flex items-center justify-center text-2xl`}>
          {service.emoji}
        </div>
        <h3 className="text-sm font-bold text-[#1a2a3a] leading-snug">{service.label}</h3>
        <span className="text-[10px] font-bold bg-[#edf4f9] text-[#90afc4] rounded-md px-2 py-0.5 w-fit">
          준비 중
        </span>
        <p className="text-xs text-[#90a8be] leading-relaxed">{service.description}</p>
      </div>
    );
  }

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-[18px] p-5 flex flex-col gap-2 shadow-sm border-[1.5px] border-transparent ${c.border} hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150 cursor-pointer no-underline text-inherit`}
    >
      <div className={`w-11 h-11 rounded-[14px] ${c.icon} flex items-center justify-center text-2xl`}>
        {service.emoji}
      </div>
      <h3 className="text-sm font-bold text-[#1a2a3a] leading-snug">{service.label}</h3>
      <p className="text-xs text-[#90a8be] leading-relaxed">{service.description}</p>
      <div className={`mt-auto text-[11px] font-bold ${c.arrow}`}>바로가기 →</div>
    </a>
  );
}
