// composables/useScrollTop.ts
export function useScrollTop() {
  /**
   * Hace scroll hacia la parte superior del contenedor o de la ventana
   * @param options Opciones de scroll nativas de `window.scrollTo`
   * @param element Elemento HTML opcional, si no se pasa hace scroll de toda la ventana
   */
  function scrollToTop (options: ScrollToOptions = { top: 0, behavior: 'smooth' }, element?: HTMLElement | null) {
    if (import.meta.client) {
      if (element) {
        element.scrollTo(options);
      } else {
        window.scrollTo(options);
      }
    }
  }

  /**
   * Indica si actualmente el scroll está más abajo de un umbral
   * @param threshold Distancia en píxeles desde arriba
   * @param element Elemento HTML opcional, si no se pasa hace scroll de toda la ventana
   */
  function isScrolled (threshold = 100, element?: HTMLElement | null) {
    if (!import.meta.client) {
      return false;
    }

    if (element) {
      return element.scrollTop > threshold;
    }

    return window.scrollY > threshold;
  }

  return {
    scrollToTop,
    isScrolled
  };
}
