<script setup lang="ts">
import type {ProductType} from "~/interfaces/SharedInterfaces";

const { data } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <div class="col-12">
    <div class="row justify-content-center">
      <Product class="m-3" v-for="item in <Array<ProductType>>data" :key="item.id" :item="item" />
    </div>
  </div>
</template>
