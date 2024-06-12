<script setup lang="ts">
import type {ProductType} from "~/interfaces/SharedInterfaces";
import type {PropType} from "vue";

  defineProps({
    item: {
      type: Object as PropType<ProductType>,
      required: true
    }
  });
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="item.image" class="card-img-top image-height" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.description.slice(0, 200) }}</p>
    </div>
    <div class="card-footer">
      <NuxtLink :to="'/product/' + item.id" class="btn btn-primary mx-auto">{{ $t('see_more') }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .image-height {
    max-height: 200px;
  }
</style>