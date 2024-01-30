<template>
  <div class="card-wrapper h-72 2xl:h-80">
    <div class="card-images w-2/5 flex flex-col gap-2" v-if="product.images">
      <img :src="image" v-for="image in product.images" v-bind:key="image" :class="[product.images.length > 1 ? 'h-1/2' : 'h-full']" />
    </div>
    <div  class="flex flex-col gap-3 p-4 w-3/5">
      <h3>{{ product.title }}</h3>
      <ul class="card-list" v-if="product.list">
        <li v-for="list in product.list" v-bind:key="list">
          {{ list }}
        </li>
      </ul>
      <p class="card-description" v-if="product.description">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    product: IProduct
  }>();

</script>

