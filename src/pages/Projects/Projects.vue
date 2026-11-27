<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const selectedCategory = ref('Todos')

const categories = [
  'Todos',
  'Ilustración',
  'Diseño personaje'
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return projects
  }

  return projects.filter(
    project => project.category === selectedCategory.value
  )
})
</script>

<template>
  <section class="w-full px-6 py-12">

    <header class="mb-10">
      <h1 class="text-4xl font-bold mb-3 font-mono">
        Mis proyectos
      </h1>

      <p class="text-gray-500 font-mono">
        Una selección de mis trabajos creativos favoritos, y dirigidos a los dos campos de más interés personal dentro del dibujo.
         ‍
      ㅤㅤㅤㅤㅤㅤㅤ
       ‍
      ㅤㅤㅤㅤㅤㅤㅤ
        ⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　✦ 　　　　　,　　　　　　　.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
　　　　　　*　　　　　　　　　　　.
.　　　　　　　　　　　　　. 　　✦⠀　   　　　,　　　　　　　　　*
　　　　　⠀　　　　⠀　　,
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀.　　　　　 　　⠀　　　⠀.　
 　　˚　　　⠀　⠀  　　,　　　　　　.
　　　　　　　　　　　　　.
　　　　　　*⠀　　⠀  　　　　　⠀✦⠀　
　　　　　　*　　　　　　　　　　　　　　　　　　.
　　　　.　　　　.　　　⠀
　　　　　　　　　　　.
      </p>
    </header>

    <nav class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-4 py-2 border rounded-full text-sm font-mono"
        :class="selectedCategory === category
          ? 'bg-black text-white'
          : 'hover:bg-gray-100'"
      >
        {{ category }}
      </button>
    </nav>

    <div class="grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-3 gap-8 ">

      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />

    </div>

  </section>
</template>