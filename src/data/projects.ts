export interface Project {
  id: number
  title: string
  category: string
  year: number
  image: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ilustración',
    category: 'Dibujo',
    year: 2026,
    image: '/public/images/ILU_ETHEL.jpg',
    description: 'Homenaje al arte de la artista musical Ethel Cain, compositora y escritora.'
  },
  {
    id: 2,
    title: 'Diseño personaje',
    category: 'Dibujo',
    year: 2025,
    image: '/public/images/1.jpg',
    description: 'Diseño basado en el postre de las tortitas.'
  },
  {
    id: 3,
    title: 'Diseño personaje',
    category: 'Dibujo',
    year: 2025,
    image: '/public/images/2.jpg',
    description: 'Diseño basado en el postre de las galletas de chocolate y fresa.'
  },
  {
      id: 4,
    title: 'Diseño personaje',
    category: 'Dibujo',
    year: 2025,
    image: '/public/images/3.jpg',
    description: 'Diseño basado en el postre de la tarta de fresa y nata.'
  },
  {
      id: 5,
    title: 'Diseño personaje',
    category: 'Dibujo',
    year: 2025,
    image: '/public/images/4.jpg',
    description: 'Diseño de personaje basado en los ángeles caídos.'
  },
]