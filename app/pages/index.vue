<template>
  <!-- Main prose content container -->
  <div class="prose dark:prose-invert max-w-none">
    <ContentDoc path="/" />
  </div>

  <div class="mt-8 text-center">
    <div class="mt-4 flex justify-center space-x-6">
      <a
        href="https://abc.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vercel"
        class="hover:opacity-80 transition"
      >
        <img src="public/images/vercel.svg" alt="Vercel" class="w-8 h-8" />
      </a>
    </div>
  </div>
</template>

<style scoped>
img {
  display: inline-block;
}
</style>
