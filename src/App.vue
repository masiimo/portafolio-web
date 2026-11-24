<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from './components/ui/button/Button.vue';

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    :class="isHome ? 'justify-center' : 'justify-start'"
  >

    <section
      v-if="isHome"
      class="text-center px-4 mb-8"
    >

      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Bienvenido a mi Portfolio
      </h1>

      <p class="text-lg md:text-xl">
        Artista visual, ilustrador y creación de personaje.
      </p>

    </section>

    <nav
    class="flex gap-3 w-full p-4"
    :class="isHome
    ? 'flex-col items-center max-w-md mx-auto'
    : 'flex-col md:flex-row'"
    >

    <Button as-child class="w-full">
      <RouterLink to="/">
        Inicio
      </RouterLink>
    </Button>

    <Button as-child class="w-full">
      <RouterLink to="/proyectos">
        Proyectos
      </RouterLink>
    </Button>

    <Button as-child class="w-full">
      <RouterLink to="/sobre-mi">
        Sobre mí
      </RouterLink>
    </Button>
    </nav>

    <main>
      <RouterView />
    </main>

  </div>
</template>




