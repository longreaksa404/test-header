export const useHeaderState = () => {
  const activeDropdown = useState<string | null>('activeDropdown', () => null)
  
  const isProfileOpen = useState<boolean>('isProfileOpen', () => false)
  const isBalanceOpen = useState<boolean>('isBalanceOpen', () => false)

  const closeAll = () => {
    activeDropdown.value = null
    isProfileOpen.value = false
    isBalanceOpen.value = false
  }

  const toggle = (type: 'menu' | 'profile' | 'balance', label?: string) => {
    if (type === 'menu' && label) {
      const isAlreadyOpen = activeDropdown.value === label
      closeAll()
      activeDropdown.value = isAlreadyOpen ? null : label
    } 
    
    else if (type === 'profile') {
      const isAlreadyOpen = isProfileOpen.value
      closeAll()
      isProfileOpen.value = !isAlreadyOpen
    } 
    
    else if (type === 'balance') {
      const isAlreadyOpen = isBalanceOpen.value
      closeAll()
      isBalanceOpen.value = !isAlreadyOpen
    }
  }

  return {
    activeDropdown,
    isProfileOpen,
    isBalanceOpen,
    toggle,
    closeAll
  }
}