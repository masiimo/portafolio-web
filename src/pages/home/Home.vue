<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-vue-next'
</script>

<template>
  <div class="flex justify-center items-center">
    <h1 class="flex center text-3xl text-pink-500 font-bold md:text-4xl lg:text-4xl">
    </h1>
    <a
    href="https://www.instagram.com/TU_USUARIO/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
    >
    <Instagram :size="20" />
    <span>@de3rdoll</span>
    </a>
  </div>

</template>


<style scoped>

</style>