<script setup lang="ts">

</script>

<template>
  <nav class="flex gap-6 p-6">
    <RouterLink to="/">
      Inicio
    </RouterLink>
    <RouterLink to="/proyectos">
      Proyectos
    </RouterLink>
    <RouterLink to="/sobre-mi">
      Sobre mí
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>




