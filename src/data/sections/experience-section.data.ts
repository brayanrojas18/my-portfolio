import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, instagram, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  mongoDb,
  nextJs,
  nx,
  pnpm,
  react,
  reactNative,
  reactQuery,
  tailwindCss,
  typescript,
  android,
  vue,
  node,
  quasar,
  nestJs,
  laravel,
  php,
  mysql,
  loopback,
  graphql,
  socket,
  capacitor,
  cordova,
  js,
  redux,
  boostrap,
  openAI,
  express
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experiencia de Trabajo',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior front-end developer & Mobile developer',
      company: 'SendingUp',
      image: import('@/assets/logos/sendingup.png'),
      dates: [new Date('2024-02'), null],
      description: `
        - Mejora funcional y legibilidad de código en el front-end.
        - Implementación de nuevas funcionalidades y módulos.
        - Correcciones de bugs.
        - Mejora de UX.
        - Desarrollo de aplicativo móvil (sendingup)
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [js(), typescript(), react(), reactNative(), redux(), boostrap(), openAI()],
      },
      links: [website({ url: 'https://sendingup.co/' })],
    },
    {
      role: 'Senior full-stack developer',
      company: 'Libro de Ruta',
      image: import('@/assets/logos/libro.png'),
      dates: [new Date('2024-02'), new Date('2024-06')],
      description: `
        - Implementación de nuevas funcionalidades y módulos.
        - Correcciones de bugs.
        - Mejora de UX.
        - Implementacion de apis
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [typescript(), nextJs(), mysql(), node(), express()],
      },
      links: [website({ url: 'http://ec2-3-95-217-96.compute-1.amazonaws.com:3000/' })],
    },
    {
      role: 'Senior full-stack mobile developer',
      company: 'Libro de Ruta App (Uno Crono)',
      image: import('@/assets/logos/uno.png'),
      dates: [new Date('2024-04'), new Date('2024-06')],
      description: `
        - Desarrollo de todos los modulos.
        - Implementeacion Websocket.
        - Desarrollo de UX.
        - Implementacion de apis
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [typescript(), vue(), quasar(), capacitor(), nestJs(), mysql(), socket()],
      },
      links: [website({ url: '' })],
    },
    {
      role: 'Senior full-stack developer',
      company: 'Appex',
      image: import('@/assets/logos/appex.png'),
      dates: [new Date('2024-03'), new Date('2024-04')],
      description: `
        - Desarrollo de todos los modulos.
        - Implementeacion Firebase.
        - Desarrollo de UX.
        - Implementacion de apis Firebase
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [typescript(), vue(), quasar(), firebase()],
      },
      links: [website({ url: 'https://appex-403ab.web.app' })],
    },
    {
      role: 'Senior full-stack developer',
      company: 'Wondrix Latam',
      image: import('@/assets/logos/nomina.png'),
      dates: [new Date('2018-11'), new Date('2023-10')],
      description: `
        - Mejora funcional y legibilidad de código en el front-end y backend.
        - App hibrida (app y web) y API independiente para el uso de los usuarios (Empleados).
        - Refactorización de código back y funciones independientes para optimización del front-end.
        - APIS para extracciones de datos para cargas en el sistema.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [quasar(), vue(), typescript(), node(), mongoDb(), socket(), android(), capacitor(), cordova()],
      },
      links: [website({ url: 'https://nomina360.com.ec/' })],
    },
    {
      role: 'Junior full-stack developer',
      company: 'Microvoz Latam',
      image: import('@/assets/logos/microvoz.png'),
      dates: [new Date('2023-05'), new Date('2023-09')],
      description: `
        - Mejora funcional y legibilidad de código en el front-end.
        - Desarrollo de módulos front-end y backend.
        - Actualización y optimización de módulos y migraciones de lenguajes a nuevo API.
        - Desarrollo front-end móvil.
        - Correcciones de bugs.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [php(), vue(), quasar(), typescript(), nestJs(), laravel(), mongoDb(), mysql(), socket()],
      },
      links: [website({ url: 'https://microvoz.com/' })],
    },
    {
      role: 'Senior full-stack developer',
      company: 'La Gocha',
      image: import('@/assets/logos/lagocha.png'),
      dates: [new Date('2020-10'), new Date('2022-02')],
      description: `
        - Desarrollo de API.
        - Desarrollo de Front-end (Escritorio y movíl).
        - Creación y configuración de Bases de Datos.
        - Despliegue a producción.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [vue(), quasar(), loopback(), mongoDb(), socket()],
      },
      links: [instagram({ url: 'https://www.instagram.com/intercambioslagocha/?hl=es' })],
    },
    {
      role: 'Senior full-stack developer',
      company: 'Whimzy',
      image: import('@/assets/logos/whimzy.png'),
      dates: [new Date('2019-08'), new Date('2020-02')],
      description: `
        - Desarrollo de API.
        - Desarrollo de Front-end (Escritorio y movíl).
        - Creación y configuración de Bases de Datos.
        - Despliegue a producción.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [vue(), quasar(), loopback(), graphql(), mongoDb(), socket()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
