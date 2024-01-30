<template>
  <div>
    <h2 class="h2-header text-center mt-10 text-4xl lg:text-5xl xl:text-6xl">
      We make creative media <br /> that <span class="text-blue-3">adds value</span>
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 container mt-20 px-20">
      <card-item v-for="product in products" v-bind:key="product.id" :product="product"></card-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from "~/components/Shared/Cards/CardItem.vue";
import { products } from "~/constants/data";

</script>
