import { marked } from './vendor/marked.esm.js';

/** Render `markdown` exactly as marked 18.1.3 does with its default options. */
export function parse(markdown) {
  return marked.parse(markdown);
}
