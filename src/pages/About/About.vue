
<script setup lang="ts">

import { ref } from 'vue'

const title = ref('Detalle de perfil personal')

</script>

<template>

  <section class="p-8">

    <h1 class="text-4xl font-bold">
      {{ title }}
    </h1>

    <p class="mt-4">
      Sobre mí.
    </p>

  </section>

</template>
