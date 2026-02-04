import { HeaderData } from '~/types/navigation'

export default defineEventHandler((): HeaderData => {
  // Mock data structured to support the high-fidelity dropdowns in Figma
  return {
    mainNav: [
      { 
        label: 'LỊCH TRỰC TIẾP', 
        path: '/live', 
        hasDropdown: true, 
        children: [
          { name: 'BÓNG ĐÁ', icon: 'fluent:sport-24-filled' },
          { name: 'ĐUA BI', icon: 'material-symbols:sports-mma' },
          { name: 'BÓNG RỔ', icon: 'ion:basketball' },
          { name: 'E-SPORTS', icon: 'si-glyph:game-controller' },
          { name: 'CASINO', icon: 'mdi:cards-playing' }
        ] 
      },
      { 
        label: 'LỊCH THI ĐẤU', 
        path: '/schedule', 
        hasDropdown: true, 
        children: [
          { name: 'NGOẠI HẠNG ANH', icon: 'lucide:trophy' },
          { name: 'LA LIGA', icon: 'lucide:award' },
          { name: 'SERIE A', icon: 'lucide:medal' }
        ] 
      },
      { label: 'TỶ LỆ KÈO', path: '/odds', hasDropdown: false },
      { label: 'KẾT QUẢ', path: '/results', hasDropdown: false },
      { label: 'PHÒNG CHÁT', path: '/chat', hasDropdown: false },
      { label: 'TIN TỨC', path: '/news', hasDropdown: false },
    ],
    subNav: [
      { label: 'Bảng Tin', path: '#', icon: 'lucide:message-square' },
      { label: 'Reels', path: '#', icon: 'lucide:play' },
      { label: 'Highlight', path: '#', icon: 'lucide:star' },
      { label: 'Tip Kèo', path: '#', icon: 'lucide:lightbulb' },
      { label: 'Phim Ảnh', path: '#', icon: 'lucide:film' },
      { label: 'Truyện Tranh', path: '#', icon: 'lucide:book-open' },
    ]
  }
})
