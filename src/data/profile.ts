export const profile = {
  name: 'papyrus',
  intro: 'A generalist with interests in applied AI, systems programming and AI inference and infrastructure',
  links: [] as { label: string; href: string }[],
}

export const navigation = [
  { page: 'home', label: 'Home', href: '/' },
  { page: 'projects', label: 'Projects', href: '/projects/' },
  { page: 'blog', label: 'Blog', href: '/blog/' },
  { page: 'vault', label: 'Vault', href: '/vault/' },
  { page: 'about', label: 'About', href: '/about/' },
] as const

export type Section = typeof navigation[number]['page']
