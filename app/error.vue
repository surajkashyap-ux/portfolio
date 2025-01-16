<template>
  <NuxtLayout>
    <section>
      <h1 class="text-5xl mb-8">ops! {{ error.statusCode }} ⚠️</h1>
      <h2 class="font-semibold text-xl">{{ error.statusMessage }}</h2>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({ error: Object })
</script>