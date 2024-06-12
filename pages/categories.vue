+<script setup lang="ts">
const { data } = await useFetch<Array<string>>('https://fakestoreapi.com/products/categories')
</script>

<template>
  <div class="row justify-content-center">
    <NuxtLink class="col-5 m-2 p-4 text-center border shadow rounded" v-for="(item, index) in <Array<string>>data" :key="index" :to="'/category-' +item + '/products'">
      {{ item }}
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>