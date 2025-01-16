<template>
  <slot :posts="posts" :limit="limit">
    <section class="not-prose font-mono">
      <header class="column text-gray-500 text-sm select-none">
        <span>date</span>
        <span>title</span>
      </header>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-700">
            <div :class="[post.dispayYear ? 'text-gray-400 dark:text-gray-500' : 'text-white group-hover:text-gray-100 dark:group-hover:text-gray-700 dark:text-gray-900']">
              {{ post.year }}
            </div>
            <p>{{ post.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const { data } = await useAsyncData(
  'blog-list', 
  () => {
    const query = queryContent('/blog')
    .where({ _path: {$ne: '/blog'} })
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })

    if(props.limit) {
      query.limit(props.limit)
    }

    return query.find();
  } 
);

const posts = computed(() => {
  if(!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for(const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    const dispayYear = year !== lastYear;
    post.dispayYear = dispayYear;
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  return result;
})
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-300 dark:border-b-gray-500
}

</style>