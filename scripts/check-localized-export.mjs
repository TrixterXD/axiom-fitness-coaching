import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const readExport = (path) => readFileSync(`out/${path}`, "utf8").split("<script>")[0];
const entry = readExport("index.html");
assert.match(entry, /<html lang="ro"/);
assert.match(entry, /content="0;url=\/ro\/"/);
assert.match(entry, /href="\/ro\/"/);

const pages = {
  ro: ["DEZVOLTĂ-ȚI FORȚA.", "5 din 5 stele"],
  ru: ["РАЗВИВАЙТЕ СИЛУ.", "5 из 5 звёзд"],
  en: ["BUILD STRENGTH.", "5 out of 5 stars"],
};

const missingSocialImages = [];
for (const [locale, [heading, rating]] of Object.entries(pages)) {
  const html = readExport(`${locale}/index.html`);
  assert.ok(html.includes(`<html lang="${locale}"`));
  assert.ok(html.includes(heading));
  assert.ok(html.includes(`aria-label="${rating}"`));
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description);
  for (const tag of [
    `property="og:title" content="${title}"`,
    `property="og:description" content="${description}"`,
    `name="twitter:title" content="${title}"`,
    `name="twitter:description" content="${description}"`,
  ]) {
    assert.ok(html.includes(tag), tag);
  }
  assert.match(html, /name="robots" content="noindex, follow"/);
  if (!/property="og:image" content="[^"]*\/opengraph-image\.jpg/.test(html)) {
    missingSocialImages.push(locale);
  }
  assert.match(html, /rel="icon" href="\/icon\.svg/);
  for (const language of Object.keys(pages)) {
    assert.match(html, new RegExp(`<a[^>]*href="/${language}/"[^>]*hreflang="${language}"`, "i"));
  }
  assert.match(html, new RegExp(`<a[^>]*href="/${locale}/"[^>]*aria-current="page"`));
  for (const section of ["about", "services", "client-stories", "contact"]) {
    assert.ok(html.includes(`id="${section}"`));
  }
}

assert.deepEqual(
  readFileSync("out/opengraph-image.jpg"),
  readFileSync("src/app/opengraph-image.jpg"),
);
assert.deepEqual(readFileSync("out/icon.svg"), readFileSync("src/app/icon.svg"));
assert.deepEqual(
  readFileSync("out/videos/axiom-brand-film.mp4"),
  readFileSync("public/videos/axiom-brand-film.mp4"),
);
assert.equal(missingSocialImages.length, 0, `Missing Open Graph image: ${missingSocialImages}`);
console.log("Localized static export verified for /, /ro/, /ru/, and /en/.");
