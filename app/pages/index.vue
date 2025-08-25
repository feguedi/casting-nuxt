<script lang="ts" setup>
import { useScrollTop } from '~/composables/useScrollTop';

const { scrollToTop, isScrolled } = useScrollTop();

const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    showButton.value = isScrolled(200);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {});
});
</script>

<template>
  <div>
    <!-- Contenido largo -->
    <div v-for="n in 100" :key="n">Fila {{ n }}</div>

    <button
      v-show="showButton"
      class="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg"
      @click="scrollToTop()"
    >
      ⬆️
    </button>
  </div>
</template>
