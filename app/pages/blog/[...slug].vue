<template>
  <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 prose-img:max-w-28 dark:prose-pre:text-gray-300 max-w-none">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="[ doc.toc ? 'col-span-6 md:col-span-4' : 'col-span-full']">
            <ContentRenderer :value="doc" />
          </div>
          <div class="hidden md:col-span-2 md:block" v-if="doc.toc">
            <aside class="sticky top-8">
              <h4>Table of contents</h4>
              <nav class="not-prose">
                <TocLinks :links="doc.body.toc.links"/> 
              </nav>
            </aside>
          </div>
        </div>
      </template>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found</p>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>