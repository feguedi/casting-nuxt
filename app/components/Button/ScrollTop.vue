<script setup lang="ts">
import { useScrollTop } from '@/composables/useScrollTop';

// Props configurables
const props = defineProps<{
  threshold?: number;   // Desde qué distancia empieza a mostrarse el botón
  behavior?: ScrollBehavior; // smooth | auto
  target?: HTMLElement | null; // si quieres un contenedor específico
}>();

const { scrollToTop, isScrolled } = useScrollTop();
const visible = ref(false);

function checkScroll() {
  visible.value = isScrolled(props.threshold ?? 200);
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});

function goTop() {
  scrollToTop({ top: 0, behavior: props.behavior ?? 'smooth' }, props.target);
}
</script>

<template>
  <button
    v-show="visible"
    class="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
    @click="goTop"
  >
    ⬆️
  </button>
</template>
