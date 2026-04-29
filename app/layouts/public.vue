<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/navbar.vue'
</script>

<style>

</style>
