<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-vue-next'
</script>

<template>
  <div class="flex justify-center items-center">
  <Button>
    <a href="https://www.instagram.com/de3rdoll/"
    class="inline-flex items-center gap-2">

    <Instagram :size="20" />
    <span>@de3rdoll</span>

    </a>
  </Button>
  </div>

</template>


<style scoped>

</style>