import { onMounted } from 'vue'

export function useScrollAnimation(): void {
  onMounted(() => {
    const elements = document.querySelectorAll<Element>('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
  })
}
