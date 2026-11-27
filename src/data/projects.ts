export interface Project {
  id: number
  title: string
  category: string
  year: number
  image: string
  description: string
  concept: string
  tools: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ilustración Ethel Cain "InBred"',
    category: 'Ilustración',
    year: 2026,
    image: '/public/images/ILU_ETHEL.jpg',
    description: 'Homenaje al arte de la artista musical Ethel Cain, compositora y escritora.',
    concept: '',
    tools: ['Procreate'],
    gallery: [
      '/public/images/ILU-ETHEL.jpg',
    ]
  },
  {
    id: 2,
    title: 'Doll Tortitas',
    category: 'Diseño personaje',
    year: 2025,
    image: '/public/images/1.jpg',
    description: 'Diseño basado en el postre de las tortitas.',
    concept: '',
    tools: ['Procreate'],
    gallery: [
      '/public/images/1.jpg',
    ]
  },
  {
    id: 3,
    title: 'Doll galletas',
    category: 'Diseño personaje',
    year: 2025,
    image: '/public/images/2.jpg',
    description: 'Diseño basado en el postre de las galletas de chocolate y fresa.',
    concept: '',
    tools: ['Procreate'],
    gallery: [
      '/public/images/2.jpg',
    ]
  },
  {
      id: 4,
    title: 'Doll Tarta de fresa',
    category: 'Diseño personaje',
    year: 2025,
    image: '/public/images/3.jpg',
    description: 'Diseño basado en el postre de la tarta de fresa y nata.',
    concept: '',
    tools: ['Procreate'],
    gallery: [
      '/public/images/3.jpg',
    ]
  },
  {
      id: 5,
    title: 'Ángel caído diseño original',
    category: 'Diseño personaje',
    year: 2025,
    image: '/public/images/4.jpg',
    description: 'Diseño de personaje basado en los ángeles caídos.',
    concept: '',
    tools: ['Procreate'],
    gallery: [
      '/public/images/4.jpg',
    ]
  },
]