<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3">
        <Icon name="logos:nuxt-icon" class="w-8 h-8" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">DG Group</span>
      </NuxtLink>

      <div class="flex md:order-2 space-x-3">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
          Get started
        </button>
        <button class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100">
          <Icon name="lucide:menu" class="w-6 h-6" />
        </button>
      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink :to="item.path" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Define navigation items in a clean, typed array
interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];
</script>