<template>
  <nav class="fixed top-0 left-0 right-0 bottom-0 md:hidden font-mono backdrop-blur-md py-6 px-2 z-10">
    <div aria-label="Close menu" @click="toggleMenuEvent">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
    <ul class="flex flex-col md:flex-row gap-8 md:gap-4 text-center mt-7">
      <li @click="toggleMenuEvent">
        <NuxtLink to ="/" class="link">Main</NuxtLink>
      </li>
      <li @click="toggleMenuEvent">
        <NuxtLink to ="/about" class="link">About</NuxtLink>
      </li>
      <li @click="toggleMenuEvent">
        <NuxtLink to ="/blog" class="link">Blog</NuxtLink>
      </li>
      <li @click="toggleMenuEvent">
        <NuxtLink to ="/projects" class="link">Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(['toggleMenu'])

const toggleMenuEvent = () => {
  emit('toggleMenu')
}
</script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base
}
</style>