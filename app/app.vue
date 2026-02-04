<script setup lang="ts">
import '~/assets/css/main.css'

useHead({
  title: 'Header Test Project',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
    { name: 'description', content: 'Technical test for recruiter - Responsive Header Implementation' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black font-sans antialiased text-white">
    <AppHeader />

    <main class="pt-24 xl:pt-[102px]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>

    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #000; 
}
</style>