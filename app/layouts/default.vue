<template>
  <div class="container">
    <header class="flex justify-between items-center my-5">
      <div class="flex items-center gap-10">
        <div class="hidden md:block">
          <NuxtLink to="/" class="text-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-800">Suraj Kashyap</NuxtLink>
        </div>
        <Navbar />
        <div aria-label="Open menu" @click="toggleMobileMenu" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <MobileNavbar @toggle-menu="toggleMobileMenu" :class="[ mobileMenuIsOpen ? 'block' : 'hidden']"/>
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <!-- fine header -->
    <!-- inizio main content -->
    <main class="mt-10">
      <slot></slot>
    </main>
    <!-- fine main content -->
  </div>
</template>

<script setup>
useHead({
  titleTemplate: 'Portfolio - %s'
})

const toggleMobileMenu = () => {
  mobileMenuIsOpen.value = !mobileMenuIsOpen.value
}

const mobileMenuIsOpen = ref(false)
</script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>