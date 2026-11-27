<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="group cursor-pointer">
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full aspect-4/3 object-cover
             transition-transform duration-300
             group-hover:scale-[1.02]"
    />

    <div class="mt-3">
      <h2 class="text-lg font-medium">
        {{ project.title }}
      </h2>

      <p class="text-sm text-gray-500">
        {{ project.category }} · {{ project.year }}
      </p>
    </div>
  </article>
</template>