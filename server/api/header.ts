import { HeaderData } from '~/types/navigation'

export default defineEventHandler((): HeaderData => {

  // dropdown
  const sharedCategories = [
    { name: 'Soccer', icon: 'fluent:sport-24-filled' },
    { name: 'Motorsports', icon: 'material-symbols:sports-mma' },
    { name: 'Basketball', icon: 'ion:basketball' },
    { name: 'E-Sports', icon: 'lucide:gamepad-2' },
    { name: 'Casino', icon: 'mdi:cards-playing' }
  ]

  const mainNav = [
    { 
      label: 'Live Broadcast', 
      path: '/live', 
      hasDropdown: true, 
      children: sharedCategories 
    },
    { 
      label: 'Tournament Schedule', 
      path: '/schedule', 
      hasDropdown: true, 
      children: sharedCategories 
    },
    { 
      label: 'Betting Odds', 
      path: '/odds', 
      hasDropdown: true, 
      children: sharedCategories 
    },
    { 
      label: 'Match Results', 
      path: '/results', 
      hasDropdown: true, 
      children: sharedCategories 
    },
    { 
      label: 'Community Chat', 
      path: '/chat', 
      hasDropdown: true, 
      children: sharedCategories 
    },
    { 
      label: 'Global News', 
      path: '/news', 
      hasDropdown: true, 
      children: sharedCategories 
    },
  ]
  // sub navigation
  const subNav = [
    { label: 'News Feed', path: '#', icon: 'lucide:message-square' },
    { label: 'Daily Reels', path: '#', icon: 'lucide:play' },
    { label: 'Highlights', path: '#', icon: 'lucide:star' },
    { label: 'Premium Tips', path: '#', icon: 'lucide:lightbulb' },
    { label: 'Cinema', path: '#', icon: 'lucide:film' },
    { label: 'Comics', path: '#', icon: 'lucide:book-open' },
  ]

  return {
    mainNav,
    subNav
  }
})