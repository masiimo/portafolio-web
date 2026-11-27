<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()

// Buscamos el proyecto según el ID de la URL
const project = computed(() => {
  return projects.find(
    p => p.id === Number(route.params.id)
  )
})
</script>

<template>
  <section class="w-full px-6 py-12">

    <!-- Botón para volver -->
    <RouterLink
      to="/proyectos"
      class="inline-flex items-center gap-2 mb-10
             hover:opacity-60 transition"
    >
      ← Volver a proyectos
    </RouterLink>

    <!-- Información del proyecto -->
    <div v-if="project">

      <!-- Cabecera -->
      <header class="mb-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">
          {{ project.title }}
        </h1>

        <p class="text-gray-500">
          {{ project.category }} · {{ project.year }}
        </p>
      </header>


<!-- Imagen e información del proyecto -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

  <!-- Imagen principal -->
  <div>
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[600px] object-cover"
    />
  </div>

  <!-- Información -->
  <div class="flex flex-col justify-center gap-8 lg:py-6">

    <!-- Descripción -->
    <div>
      <h2 class="text-2xl lg:text-3xl font-semibold mb-4">
        Sobre el proyecto
      </h2>

      <p class="text-base lg:text-lg leading-relaxed text-gray-600">
        {{ project.description }}
      </p>
    </div>

    <!-- Técnicas y herramientas -->
    <div>
      <h2 class="text-2xl lg:text-3xl font-semibold mb-4">
        Técnicas y herramientas
      </h2>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="tool in project.tools"
          :key="tool"
          class="border border-gray-300 rounded-full px-5 py-2.5 text-base"
        >
          {{ tool }}
        </span>
      </div>
    </div>

  </div>
</div>

    </div>

    <!-- Si no existe el proyecto -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">
        Proyecto no encontrado
      </h1>

      <RouterLink to="/proyectos" class="underline">
        Volver a proyectos
      </RouterLink>
    </div>

  </section>
</template>