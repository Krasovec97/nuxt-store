<script setup lang="ts">
import type {ProductType} from "~/interfaces/SharedInterfaces";

const route = useRoute()
const { data } = await useFetch('https://fakestoreapi.com/products/category/' + route.params.name)
</script>

<template>
  <div class="col-12">
    <div class="row justify-content-center">
      <Product class="m-3" v-for="item in <Array<ProductType>>data" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped>

</style>