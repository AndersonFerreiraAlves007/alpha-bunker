/* export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
}; */

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.cjs';

const postcss = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};

export default postcss;
