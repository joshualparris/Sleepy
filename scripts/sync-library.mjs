#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'

const library = JSON.parse(readFileSync('library.json', 'utf8'))
const html = readFileSync('index.html', 'utf8')
const replacement = `const library = ${JSON.stringify(library)};`
const pattern = /const library = \[[\s\S]*?\];/

if (!pattern.test(html)) {
  throw new Error('Could not find the embedded library in index.html')
}

const next = html.replace(pattern, replacement)
if (next !== html) writeFileSync('index.html', next)
console.log(`Synced ${library.length} bedtime videos into index.html`)
