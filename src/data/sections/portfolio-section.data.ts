import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import { quasar, loopback, mongoDb } from '../helpers/skills';
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
  laravel,
  php,
  mysql,
  loopback,
  graphql,
  socket,
  web3,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Proyectos',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Fast Money',
      image: import('@/assets/portfolio/fast-money.png'),
      dates: [new Date('2022-08'), new Date('2022-10')],
      details: [
        { label: 'Equipo', value: '3 personas' },
        { label: 'Mi rol', value: ['Senior Full-stack Developer', 'Director'] },
        { label: 'Empresa', value: 'No' },
        { label: 'Categoría', value: ['Sistema web'] },
      ],
      description:
        'Sistema web para juego de azar realizado basado en la blockchain, usando web 3. Consiste en la compra de folletos con un numero, el cual al finalizar la venta de folletos realiza un sorteo donde arroja los ganadores y posteriormente empezar otro sorteo.',
      tagsList: {
        title: 'Tegnologías',
        tags: [quasar(), vue(), loopback(), web3(), mongoDb()],
      },
      links: [github({ url: 'https://github.com/brayanrojas18/luck-and-play' })],
    },
    {
      name: 'Tether Lottery',
      image: import('@/assets/portfolio/tl.png'),
      dates: [new Date('2022-06'), new Date('2022-08')],
      details: [
        { label: 'Equipo', value: '3 personas' },
        { label: 'Mi rol', value: ['Senior Full-stack Developer', 'Director'] },
        { label: 'Empresa', value: 'No' },
        { label: 'Categoría', value: ['Sistema web'] },
      ],
      description:
        'Juego de azar que consta de 5 tipos, los cuales cada tipo tiene un cantidad de folletos estimadas a vender, al terminar los folletos se ejecuta el sorteo, dejando una cantidad de ganadores para posteriormente ejecutar el siguiente sorteo.',
      tagsList: {
        title: 'Tegnologías',
        tags: [quasar(), vue(), loopback(), web3(), mongoDb()],
      },
      links: [github({ url: 'https://github.com/brayanrojas18/tether-lottery' })],
    },
    {
      name: 'World Mining',
      image: import('@/assets/portfolio/WM.png'),
      dates: [new Date('2021-12'), new Date('2022-05')],
      details: [
        { label: 'Equipo', value: '7 personas' },
        { label: 'Mi rol', value: ['Senior Full-stack Developer', 'Director'] },
        { label: 'Empresa', value: 'No' },
        { label: 'Categoría', value: ['Sistema web'] },
      ],
      description:
        'Proyecto Blockchain NFT. Marketplace de NTF, Exchange de tokens, compra de tokens, intercambios de NTF, Mejoras de NTF, configuracion del video juego, entre otras cosas son las que albergan este sistema web. ',
      tagsList: {
        title: 'Tegnologías',
        tags: [quasar(), vue(), loopback(), web3(), mongoDb()],
      },
      links: [github({ url: 'https://github.com/brayanrojas18/world-mining' })],
    },
    {
      name: 'GYM System',
      image: import('@/assets/portfolio/gym.png'),
      dates: [new Date('2021-09'), new Date('2022-12')],
      details: [
        { label: 'Equipo', value: '2 personas' },
        { label: 'Mi rol', value: ['Senior Full-stack Developer', 'Director'] },
        { label: 'Empresa', value: 'No' },
        { label: 'Categoría', value: ['Sistema web'] },
      ],
      description:
        'Sistema para control administrativo de los gimnasios, el cual lleva, mensualidades, inscripciones y otros datos importantes de tanto para la ficha del cliente como del GYM, este permite llevar un orden y reportes de todo tipo para su respaldo. ',
      tagsList: {
        title: 'Tegnologías',
        tags: [quasar(), vue(), node(), loopback(), mongoDb()],
      },
      links: [github({ url: 'https://github.com/brayanrojas18/GYM' })],
    },
    {
      name: 'Building Administrative',
      image: import('@/assets/portfolio/building.png'),
      dates: [new Date('2021-05'), new Date('2021-08')],
      details: [
        { label: 'Equipo', value: '2 personas' },
        { label: 'Mi rol', value: ['Senior Full-stack Developer', 'Director'] },
        { label: 'Empresa', value: 'No' },
        { label: 'Categoría', value: ['Sistema web'] },
      ],
      description:
        'Sistema para control administrativo de condominions el cual se encarga de llevar mensualidades, pagos y morosidad de los propietarios o inquilinos, este permite llevar un orden y reportes de todo tipo para su respaldo. ',
      tagsList: {
        title: 'Tegnologías',
        tags: [quasar(), vue(), node(), loopback(), mongoDb()],
      },
      links: [github({ url: 'https://github.com/brayanrojas18/building-administrative' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
