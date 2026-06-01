// src/config/services.ts
export type ServiceStatus = 'active' | 'coming';
export type ServiceColor = 'sky' | 'teal' | 'indigo' | 'slate';

export interface Service {
  id: string;
  label: string;
  description: string;
  emoji: string;
  url: string;
  status: ServiceStatus;
  color: ServiceColor;
}

export const services: Service[] = [
  {
    id: 'timetable',
    label: '도서관 이용 신청',
    description: '수업·방과후 시간 예약',
    emoji: '📅',
    url: process.env.NEXT_PUBLIC_TIMETABLE_URL ?? 'https://librabook.vercel.app',
    status: 'active',
    color: 'sky',
  },
  {
    id: 'library',
    label: '희망도서 신청',
    description: '읽고 싶은 책 신청하기',
    emoji: '📖',
    url: process.env.NEXT_PUBLIC_LIBRARY_URL ?? 'https://library-wish.vercel.app',
    status: 'active',
    color: 'teal',
  },
  {
    id: 'review',
    label: '독서 감상문',
    description: '감상문 작성 · 이벤트 참여',
    emoji: '✍️',
    url: process.env.NEXT_PUBLIC_REVIEW_URL ?? '',
    status: 'active' as ServiceStatus,
    color: 'indigo' as ServiceColor,
  },
  {
    id: 'overdue',
    label: '연체 도서 확인',
    description: '내 연체 도서 · 반납 기한 확인',
    emoji: '📋',
    url: process.env.NEXT_PUBLIC_OVERDUE_URL ?? '',
    status: 'active' as ServiceStatus,
    color: 'slate' as ServiceColor,
  },
];
