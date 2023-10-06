import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Brayan Rojas',
  role: 'Desarrollador de Software',
  details: [
    { label: 'Teléfono', value: '58 414 485 7222', url: 'tel:58 414 485 7222' },
    { label: 'Email', value: 'brayanmontilla26@gmail.com', url: 'mailto:brayanmontilla26@gmail.com' },
    { label: 'De', value: 'Carabobo, Venezuela' },
    {
      label: 'Linkedin',
      value: 'linkedin.com/brayan-rojas-3702401b0/',
      url: 'https://www.linkedin.com/in/brayan-rojas-3702401b0/',
    },
  ],
  pdfDetails: [
    { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'mark.freeman.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    '+6 años de experiencia como desarrollador de software, adquiriendo conocimientos en distintas tecnologías y lenguajes, así como también el trabajo en equipo y la efectividad del flujo de todo proyecto. Tengo habilidad tanto en front-end como en el backend siendo así desarrollador full-stack.',
  tags: [
    { name: 'Abierto para freelance' },
    { name: 'Disponible para tu proyecto' },
    { name: 'Trabajando en proyecto paralelo' },
  ],
  action: {
    label: 'Descargar CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Brayan_Rojas.pdf',
  },
  links: [
    github({ url: 'https://github.com/brayanrojas18' }),
    linkedin({ url: 'https://www.linkedin.com/in/brayan-rojas-3702401b0/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
