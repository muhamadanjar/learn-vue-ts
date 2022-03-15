<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div id="wrapper" class="horizontal">
    <Header/>

    <div class="mx-auto max-w-5xl p-4">
      <router-view />
    </div>

  </div>
</template>

