import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { renderHead } from './src/i18n/head.ts'
import { DEFAULT_LANG, LANGS } from './src/i18n/languages.ts'

const HEAD_BLOCK = /<!-- i18n:start -->[\s\S]*?<!-- i18n:end -->/
const headBlock = (html: string) => `<!-- i18n:start -->\n    ${html}\n    <!-- i18n:end -->`

/**
 * One HTML page per language: index.html (English), mk/index.html, sq/index.html.
 * They share the same scripts and styles; only <html lang> and the translated
 * <head> differ, so search engines and link previews get each language directly.
 */
function languagePages(): Plugin {
  let outDir = 'dist'
  let isBuild = false
  return {
    name: 'core-crew-language-pages',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
      isBuild = config.command === 'build'
    },
    transformIndexHtml(html) {
      return html.replace('<!-- i18n:head -->', headBlock(renderHead(DEFAULT_LANG)))
    },
    closeBundle() {
      if (!isBuild) return
      const english = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      for (const lang of LANGS) {
        if (lang === DEFAULT_LANG) continue
        const page = english
          .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
          .replace(HEAD_BLOCK, headBlock(renderHead(lang)))
          // the page sits one folder down: ./assets/… becomes ../assets/…
          .replace(/(src|href)="\.\//g, '$1="../')
        mkdirSync(resolve(outDir, lang), { recursive: true })
        writeFileSync(resolve(outDir, lang, 'index.html'), page)
      }
    },
  }
}

// base: './' keeps the build working from any path — GitHub Pages project sites
// live under /<repo>/, a custom domain lives at /.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), languagePages()],
})
