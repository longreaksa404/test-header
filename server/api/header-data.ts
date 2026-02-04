// server/api/header-data.ts
export default defineEventHandler(() => {
  // This is your mock (dummy) data as requested in the test
  return {
    mainCategories: [
      { name: 'Lịch Trực Tiếp', path: '/live' },
      { name: 'Lịch Thi Đấu', path: '/schedule' },
      { name: 'Tỷ Lệ Kèo', path: '/odds' },
      { name: 'Kết Quả', path: '/results' },
      { name: 'Phòng Chát', path: '/chat' },
      { name: 'Tin Tức', path: '/news' }
    ],
    features: [
      { name: 'Bảng Tin', icon: 'lucide:layout-dashboard' },
      { name: 'Reels', icon: 'lucide:play' },
      { name: 'Highlight', icon: 'lucide:star' },
      { name: 'Tip Kèo', icon: 'lucide:lightbulb' },
      { name: 'Phim Ảnh', icon: 'lucide:clapperboard' },
      { name: 'Truyện Tranh', icon: 'lucide:book-open' }
    ]
  }
})