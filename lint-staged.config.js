/* eslint-env node */
import { relative } from 'path';

const eslintCommand = (filenames) =>
  `npm run lint --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

const formatCommand = 'prettier --write';
export default {
  '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
};
