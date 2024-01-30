<template>
  <div>
    <Card></Card>
    <Button />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Nuxt 3 Card Demo',
    meta: [
      { name: 'description', content: 'Nuxt 3 Card demo description' }
    ]
  });
  import Card from '@/components/shared/cards/Card.vue';
  import Button from '@/components/shared/Button.vue';
</script>
