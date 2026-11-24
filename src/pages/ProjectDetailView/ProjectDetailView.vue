
<script setup lang="ts">

import { ref } from 'vue'

const title = ref('Detalle del proyecto')

</script>

<template>

  <section class="p-8">

    <h1 class="text-4xl font-bold">
      {{ title }}
    </h1>

    <p class="mt-4">
      Esta es la página individual de un proyecto.
    </p>

  </section>

</template>
