import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const quasar = createSkillFactory({
  name: 'Quasar',
  icon: 'simple-icons:quasar',
  iconColor: '#050A14',
  url: 'https://quasar.dev/',
});

export const node = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/',
});

export const php = createSkillFactory({
  name: 'Php',
  icon: 'simple-icons:php',
  iconColor: '#777BB4',
  url: 'https://www.php.net/',
});

export const laravel = createSkillFactory({
  name: 'Laravel',
  icon: 'simple-icons:laravel',
  iconColor: '#FF2D20',
  url: 'https://laravel.com/',
});

export const mysql = createSkillFactory({
  name: 'Mysql',
  icon: 'simple-icons:mysql',
  iconColor: '#050A14',
  url: 'https://www.mysql.com/',
});

export const loopback = createSkillFactory({
  name: 'Loopback',
  icon: 'simple-icons:loopback',
  iconColor: '#3F5DFF',
  url: 'https://loopback.io/',
});

export const graphql = createSkillFactory({
  name: 'Graphql',
  icon: 'simple-icons:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

export const socket = createSkillFactory({
  name: 'Socket.io',
  icon: 'simple-icons:socketdotio',
  iconColor: '#010101',
  url: 'https://socket.io/',
});

export const web3 = createSkillFactory({
  name: 'Web3.js',
  icon: 'simple-icons:web3dotjs',
  iconColor: '#F16822',
  url: '',
});

export const js = createSkillFactory({
  name: 'Java Script',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: '',
});

export const angular = createSkillFactory({
  name: 'Angular js',
  icon: 'simple-icons:angularjs',
  iconColor: '#E23237',
  url: '',
});

export const express = createSkillFactory({
  name: 'Express js',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: '',
});

export const three = createSkillFactory({
  name: 'Three js',
  icon: 'simple-icons:threedotjs',
  iconColor: '#000000',
  url: '',
});

export const c = createSkillFactory({
  name: 'C++',
  icon: 'simple-icons:cplusplus',
  iconColor: '#00599C',
  url: '',
});

export const unity = createSkillFactory({
  name: 'Unity',
  icon: 'simple-icons:unity',
  iconColor: '#000000',
  url: '',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:oracle',
  iconColor: '#F80000',
  url: '',
});

export const html = createSkillFactory({
  name: 'Html5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: '',
});

export const css = createSkillFactory({
  name: 'Css3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: '',
});

export const wordpress = createSkillFactory({
  name: 'Wordpress',
  icon: 'simple-icons:wordpress',
  iconColor: '#21759B',
  url: '',
});

export const android = createSkillFactory({
  name: 'Android',
  icon: 'simple-icons:android',
  iconColor: '#3DDC84',
  url: '',
});

export const capacitor = createSkillFactory({
  name: 'Capacitor',
  icon: 'simple-icons:capacitor',
  iconColor: '#119EFF',
  url: '',
});

export const cordova = createSkillFactory({
  name: 'Cordova',
  icon: 'simple-icons:apachecordova',
  iconColor: '#E8E8E8',
  url: '',
});

export const reactNative = createSkillFactory({
  name: 'React Native',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const openAI = createSkillFactory({
  name: 'Open AI',
  icon: 'simple-icons:openai',
  iconColor: '#412991',
  url: '',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonwebservices',
  iconColor: '#232F3E',
  url: '',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: '',
});

export const boostrap = createSkillFactory({
  name: 'Bostrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#7952B3',
  url: '',
});

