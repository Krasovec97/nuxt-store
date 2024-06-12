<script setup lang="ts">
import type {ProductType} from "~/interfaces/SharedInterfaces";
const route = useRoute()

const { data } = await useFetch<ProductType>('https://fakestoreapi.com/products/' + route.params.id);
if (data === null) navigateTo('/404');
console.log(data);
</script>


<template>
 <div class="row">
    <div class="col-6 image-height">
      <img :src="data?.image" class="card-img-top h-100" alt="..." />
    </div>

   <div class="col-6 my-auto text-center">
     <h3>{{ data?.title }}</h3>
     <p class="mt-4">{{ data?.description }}</p>
     <p class="mt-4">{{ data?.price }} EUR</p>
     <button class="btn btn-primary btn-lg px-5">{{ $t('buy_now')}}</button>
   </div>
 </div>
</template>

<style scoped>
  .image-height {
    max-height: 700px;
  }
</style>