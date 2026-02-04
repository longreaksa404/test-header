<script setup lang="ts">
import { ref } from 'vue'
/**
 * Relative import resolves "Cannot find module" errors.
 */
import type { HeaderData } from '../types/navigation'

/**
 * Passing <HeaderData> generic fixes "Property 'hasDropdown' does not exist".
 */
const { data: menuData } = await useFetch<HeaderData>('/api/header')

const activeDropdown = ref<string | null>(null)
const isProfileOpen = ref(false)

const toggleDropdown = (label: string) => {
  activeDropdown.value = activeDropdown.value === label ? null : label
}

/**
 * Standard Nuxt check replaces 'process' to fix "Cannot find name 'process'".
 */
if (import.meta.client) {
  window.addEventListener('click', () => {
    activeDropdown.value = null
    isProfileOpen.value = false // Fixes "Type 'null' is not assignable to 'boolean'"
  })
}

const profileMenu = [
  { label: 'TRANG CÁ NHÂN', icon: 'lucide:user-circle' },
  { label: 'NHIỆM VỤ', icon: 'lucide:target' },
  { label: 'VÍ CỦA BẠN', icon: 'lucide:wallet' },
  { label: 'LỊCH SỬ GIAO DỊCH', icon: 'lucide:history' },
  { label: 'THOÁT TÀI KHOẢN', icon: 'lucide:log-out' }
]
</script>

<template>
  <header class="w-full fixed top-0 z-50 font-sans shadow-2xl">
    <div class="bg-black h-[64px] flex items-center justify-between px-4 lg:px-10">
      <div class="flex items-center gap-10">
        <div class="text-white text-4xl font-black italic tracking-tighter cursor-pointer">LOGO</div>
        
        <nav class="hidden xl:flex items-center gap-1">
          <div v-for="item in menuData?.mainNav" :key="item.label" class="relative">
            <button 
              @click.stop="toggleDropdown(item.label)"
              :class="[
                'text-[13px] font-bold px-5 py-2 rounded-t-2xl transition-all duration-300 uppercase',
                activeDropdown === item.label 
                  ? 'bg-gradient-to-b from-[#333] to-[#111] text-white shadow-lg' 
                  : 'text-[#C9A35F] hover:text-white'
              ]"
            >
              {{ item.label }}
            </button>

            <Transition name="slide-up">
              <div v-if="activeDropdown === item.label && item.hasDropdown" 
                class="absolute top-full left-0 w-[200px] glass-dropdown shadow-2xl rounded-b-[2rem] rounded-tr-[2rem] overflow-hidden border border-white/20 z-[60]"
              >
                <div class="flex flex-col py-2">
                  <NuxtLink v-for="sub in item.children" :key="sub.name" to="#" 
                    class="flex items-center gap-3 px-4 py-3 hover:bg-white/30 transition-all border-b border-black/5 last:border-0 group"
                  >
                    <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Icon :name="sub.icon" class="w-5 h-5 text-gray-800" />
                    </div>
                    <span class="text-[12px] font-bold text-gray-700 uppercase">{{ sub.name }}</span>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center bg-[#1a1a1a] rounded-full pl-4 pr-1 py-1 gap-3 border border-[#C9A35F]/30">
            <span class="text-[#C9A35F] font-bold text-sm">1.000</span>
            <div class="bg-[#C9A35F] rounded-full p-1 cursor-pointer hover:rotate-90 transition duration-300">
              <Icon name="lucide:plus" class="w-3 h-3 text-black font-bold" />
            </div>
          </div>
        </div>

        <div class="relative">
          <button @click.stop="isProfileOpen = !isProfileOpen" 
            class="w-9 h-9 rounded-full border-2 border-[#C9A35F] bg-zinc-800 flex items-center justify-center hover:scale-105 transition overflow-hidden"
          >
            <Icon name="lucide:user" class="w-5 h-5 text-gray-400" />
          </button>
          
          <Transition name="slide-up">
            <div v-if="isProfileOpen" 
              class="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60]"
            >
              <div class="bg-gradient-to-r from-[#C9A35F] to-[#E5C385] p-3 text-center text-[11px] font-black uppercase text-black">
                <Icon name="lucide:shield-check" class="inline w-3 h-3 mr-1" />
                Trung tâm tài khoản
              </div>
              <div class="py-1">
                <button v-for="opt in profileMenu" :key="opt.label" 
                  class="w-full text-left px-4 py-3.5 text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition border-b border-gray-50 last:border-0"
                >
                  <Icon :name="opt.icon" class="w-4 h-4 text-[#C9A35F]" />
                  {{ opt.label }}
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div class="bg-[#C9A35F] h-10 flex items-center px-4 lg:px-10 border-t border-black/10 overflow-x-auto no-scrollbar">
      <div class="flex items-center gap-8 whitespace-nowrap">
        <div v-for="feat in menuData?.subNav" :key="feat.label" class="flex items-center gap-2 group cursor-pointer">
          <Icon :name="feat.icon || 'lucide:circle'" class="w-4 h-4 text-black group-hover:scale-110 transition duration-200" />
          <span class="text-[11px] font-black text-black uppercase">{{ feat.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Glassmorphism Effect */
.glass-dropdown {
  background: linear-gradient(
    180deg, 
    rgba(220, 220, 220, 0.95) 0%, 
    rgba(255, 255, 255, 0.85) 100%
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Animation Logic */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>