import type { HeaderData } from '~/types/navigation'

export const MOCK_HEADER_DATA: HeaderData = {
  mainNav: [
    { 
      label: 'Live Score', 
      path: '/live-score' 
    },
    { 
      label: 'Schedule', 
      path: '/schedule' 
    },
    { 
      label: 'Betting Odds', 
      path: '/odds',
      hasDropdown: true,
      children: [
        { name: 'Soccer Odds', icon: 'lucide:trophy' },
        { name: 'NBA Lines', icon: 'lucide:basketball' },
        { name: 'Tennis Open', icon: 'lucide:swords' }
      ]
    },
    { 
      label: 'Results', 
      path: '/results' 
    },
    { 
      label: 'Chat Room', 
      path: '/chat',
      hasDropdown: true,
      children: [
        { name: 'Global Chat', icon: 'lucide:globe' },
        { name: 'VIP Lounge', icon: 'lucide:crown' }
      ]
    },
    { 
      label: 'News', 
      path: '/news' 
    }
  ],
  
  subNav: [
    { 
      label: 'Feed', 
      path: '/feed', 
      icon: 'lucide:layout-dashboard' 
    },
    { 
      label: 'Reels', 
      path: '/reels', 
      icon: 'lucide:play-circle' 
    },
    { 
      label: 'Highlights', 
      path: '/highlights', 
      icon: 'lucide:video' 
    },
    { 
      label: 'Tip Kèo',
      path: '/tips', 
      icon: 'lucide:message-square-quote' 
    },
    { 
      label: 'Cinema', 
      path: '/cinema', 
      icon: 'lucide:film' 
    },
    { 
      label: 'Comics', 
      path: '/comics', 
      icon: 'lucide:book-open' 
    }
  ]
}

export const MOCK_USER_DATA = {
  username: 'Alex_Johnson_99',
  displayName: 'Alex Johnson',
  balance: 1000,
  silverBalance: 20000,
  vaultBalance: 20000,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
}