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

const productionUrl = "https://axiom-fitness-coaching.vercel.app";
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
  const url = `${productionUrl}/${locale}/`;
  assert.ok(html.includes(`rel="canonical" href="${url}"`));
  assert.ok(html.includes(`property="og:url" content="${url}"`));
  assert.ok(html.includes(`rel="alternate" hrefLang="x-default" href="${productionUrl}/ro/"`));
  assert.match(html, /rel="icon" href="\/icon\.svg/);
  for (const language of Object.keys(pages)) {
    assert.ok(
      html.includes(`rel="alternate" hrefLang="${language}" href="${productionUrl}/${language}/"`),
    );
    assert.match(html, new RegExp(`<a[^>]*href="/${language}/"[^>]*hreflang="${language}"`, "i"));
  }
  assert.match(html, new RegExp(`<a[^>]*href="/${locale}/"[^>]*aria-current="page"`));
  for (const section of ["about", "services", "client-stories", "contact"]) {
    assert.ok(html.includes(`id="${section}"`));
  }
}

for (const path of [...Object.keys(pages).map((locale) => `${locale}/index.html`), "index.html"]) {
  const html = readExport(path);
  for (const tag of ['property="og:image"', 'name="twitter:image"']) {
    assert.ok(
      html.includes(`${tag} content="${productionUrl}/opengraph-image.jpg"`),
      `${path}: ${tag}`,
    );
  }
}
assert.doesNotMatch(readExport("404.html"), /localhost/);
assert.deepEqual(readFileSync("out/opengraph-image.jpg"), readFileSync("public/opengraph-image.jpg"));
assert.deepEqual(readFileSync("out/icon.svg"), readFileSync("src/app/icon.svg"));
assert.deepEqual(
  readFileSync("out/videos/axiom-brand-film.mp4"),
  readFileSync("public/videos/axiom-brand-film.mp4"),
);
console.log("Localized static export verified for /, /ro/, /ru/, and /en/.");
