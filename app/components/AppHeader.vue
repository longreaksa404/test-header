<script setup lang="ts">
import type { HeaderData } from '../types/navigation'

const { data: menuData } = await useFetch<HeaderData>('/api/header')
const { activeDropdown, isProfileOpen, isBalanceOpen, toggle, closeAll } = useHeaderState()

if (import.meta.client) {
  const onWindowClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('header')) closeAll()
  }
  window.addEventListener('click', onWindowClick)
  onUnmounted(() => window.removeEventListener('click', onWindowClick))
}

// profile
const accountActions = [
  { label: 'MY PROFILE', icon: 'lucide:user-circle' },
  { label: 'CHALLENGES', icon: 'lucide:target' },
  { label: 'MY WALLET', icon: 'lucide:wallet' },
  { label: 'TRANSACTIONS', icon: 'lucide:history' },
  { label: 'SIGN OUT', icon: 'lucide:log-out' }
]
</script>

<template>
  <header class="fixed top-0 z-50 w-full font-sans shadow-2xl">
    
    <div class="relative flex h-24 w-full flex-col overflow-hidden border-b border-white/10 xl:hidden">
      <div class="flex h-1/2 w-full items-center justify-end bg-[#C9A35F] px-4 gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80">
          <span class="text-sm font-bold text-[#C9A35F]">EN</span>
        </div>
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-black/80">
          <Icon name="lucide:menu" class="h-6 w-6 text-[#C9A35F]" />
        </button>
      </div>
      <div class="flex h-1/2 w-full items-center justify-end bg-black px-4 gap-4">
        <div class="flex items-center gap-4">
          <Icon name="twemoji:soccer-ball" class="h-6 w-6" />
          <Icon name="twemoji:basketball" class="h-6 w-6" />
          <Icon name="twemoji:video-game-content" class="h-6 w-6" />
        </div>
      </div>
      <div class="absolute left-0 top-0 flex h-full w-[60%] items-center rounded-tr-[4rem] bg-black pl-6">
        <div class="text-4xl font-black italic tracking-tighter text-white">STREAM</div>
      </div>
    </div>

    <div class="hidden xl:block">
      <div class="flex h-[54px] items-center justify-between bg-[#C9A35F] px-4 lg:px-10">
        <div class="flex h-full items-center gap-6">
          <div class="-ml-10 flex h-full items-center bg-black px-10">
            <span class="text-5xl font-black italic tracking-tighter text-white">STREAM</span>
          </div>
          
          <nav class="flex items-center gap-1">
            <div v-for="item in menuData?.mainNav" :key="item.label" class="relative h-full">
              <button 
                @click.stop="toggle('menu', item.label)"
                :class="['px-5 py-2 text-[13px] font-bold uppercase transition-all rounded-t-2xl flex items-center gap-1', 
                activeDropdown === item.label ? 'bg-black text-white' : 'text-black hover:text-white']"
              >
                {{ item.label }}
                <Icon v-if="item.hasDropdown" name="lucide:chevron-down" class="w-3 h-3 opacity-50" />
              </button>

              <Transition name="slide-up">
                <div v-if="activeDropdown === item.label && item.hasDropdown" 
                  class="absolute left-0 top-full z-[80] w-64 overflow-hidden rounded-b-2xl bg-black border-t border-white/10 shadow-2xl"
                >
                  <div class="flex flex-col py-2">
                    <button v-for="child in item.children" :key="child.name" 
                      class="flex items-center gap-3 px-5 py-4 text-[11px] font-bold text-[#C9A35F] hover:bg-white/5 transition text-left"
                    >
                      <Icon :name="child.icon" class="h-5 w-5 opacity-80" />
                      {{ child.name }}
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="relative">
            <button @click.stop="toggle('balance')" 
              class="flex items-center gap-3 rounded-full border bg-white py-1 pl-2 pr-1 shadow-sm transition-all hover:shadow-md"
            >
              <div class="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A35F]">
                 <Icon name="lucide:coins" class="h-4 w-4 text-white" />
              </div>
              <span class="pr-2 text-sm font-black text-black">2,500</span>
              <div class="rounded-full bg-[#C9A35F] p-1 transition-transform" :class="isBalanceOpen ? 'rotate-45' : ''">
                <Icon :name="isBalanceOpen ? 'lucide:x' : 'lucide:plus'" class="h-3 w-3 font-bold text-black" />
              </div>
            </button>
            
            <Transition name="slide-up">
              <div v-if="isBalanceOpen" class="balance-glass absolute right-0 top-full z-[70] mt-2 w-52 rounded-2xl border border-white/10 shadow-2xl">
                <div class="flex flex-col p-2">
                  <div class="flex items-center gap-3 rounded-xl p-3 hover:bg-white/10 transition">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500/30">
                      <Icon name="lucide:coins" class="h-5 w-5 text-white/80" />
                    </div>
                    <span class="text-sm font-bold text-white">45,000</span>
                  </div>
                  <button class="mt-1 w-full rounded-lg bg-white/5 py-3 text-xs font-black uppercase text-[#C9A35F] hover:bg-[#C9A35F] hover:text-black transition-colors">
                    DEPOSIT
                  </button>
                </div>
              </div>
            </Transition>
          </div>

          <div class="relative">
            <button @click.stop="toggle('profile')" 
              class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-zinc-800 transition-transform hover:scale-105"
            >
              <Icon name="lucide:user" class="h-5 w-5 text-gray-400" />
            </button>
            
            <Transition name="slide-up">
              <div v-if="isProfileOpen" class="absolute right-0 top-full z-[60] mt-3 w-64 overflow-hidden rounded-2xl bg-[#111] border border-white/5 shadow-2xl">
                <div class="bg-black p-3 text-center text-[11px] font-black uppercase text-[#C9A35F] tracking-widest border-b border-white/5">
                  User Control Center
                </div>
                
                <div class="flex flex-col py-1">
                  <button v-for="action in accountActions" :key="action.label" 
                    class="flex items-center gap-4 px-5 py-4 text-[11px] font-bold text-gray-300 hover:bg-white/5 hover:text-[#C9A35F] transition-all border-b border-white/5 last:border-0"
                  >
                    <Icon :name="action.icon" class="h-4 w-4 text-[#C9A35F]" />
                    <span class="uppercase">{{ action.label }}</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="flex h-12 items-center overflow-x-auto bg-black px-4 lg:px-10 no-scrollbar">
        <div class="flex items-center gap-8 whitespace-nowrap">
          <div v-for="link in menuData?.subNav" :key="link.label" class="flex items-center gap-2 cursor-pointer group">
            <div :class="['flex items-center gap-2 px-4 py-1.5 transition-all', link.label === 'Hot Tips' ? 'border-2 border-[#C9A35F] rounded-full' : '']">
              <Icon :name="link.icon || 'lucide:star'" class="h-4 w-4 text-[#C9A35F] group-hover:scale-110 transition-transform" />
              <span class="text-[11px] font-black text-[#C9A35F] uppercase">{{ link.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.balance-glass {
  background: linear-gradient(180deg, rgba(30, 30, 30, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>