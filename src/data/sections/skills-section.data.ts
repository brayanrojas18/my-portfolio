import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { html, socket } from '../helpers/skills';
import {
  loopback,
  graphql,
  php,
  laravel,
  mysql,
  unity,
  web3,
  astro,
  android,
  capacitor,
  cordova,
} from '../helpers/skills';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  vue,
  node,
  quasar,
  mongoDb,
  js,
  angular,
  express,
  three,
  java,
  c,
  wordpress,
  css,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Habilidades',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Ya lo se',
      skills: [
        js({
          level: 5,
        }),
        vue({
          level: 5,
        }),
        react({
          level: 5,
        }),
        angular({
          level: 3,
        }),
        quasar({
          level: 5,
        }),
        typescript({
          level: 5,
        }),
        node({
          level: 5,
        }),
        express({
          level: 5,
        }),
        nestJs({
          level: 4,
        }),
        nextJs({
          level: 4,
        }),
        loopback({
          level: 5,
        }),
        graphql({
          level: 2,
        }),
        php({
          level: 4,
        }),
        laravel({
          level: 4,
        }),
        mongoDb({ level: 5 }),
        mysql({ level: 4 }),
        firebase({ level: 4 }),
        java({ level: 2 }),
        c({ level: 2 }),
        unity({ level: 3 }),
        web3({ level: 3 }),
        sass({
          level: 3,
        }),
        tailwindCss({ level: 3 }),
        astro({ level: 4 }),
        wordpress({ level: 4 }),
        html({ level: 4 }),
        css({ level: 4 }),
        android({ level: 4 }),
        capacitor({ level: 5 }),
        cordova({ level: 5 }),
        socket({ level: 4 }),
      ],
    },
    {
      title: 'Idiomas',
      skills: [
        { icon: 'circle-flags:us', name: 'Ingles - intermedio' },
        { icon: 'circle-flags:es-variant', name: 'Español - nativo' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
