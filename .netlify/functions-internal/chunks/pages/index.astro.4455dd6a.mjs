/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.3bf5c58e.mjs';
import 'html-escaper';
import { a as $$Layout } from './dogs.astro.15eef935.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react';

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, showReasonLogo } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
  <a${addAttribute(href, "href")} class="astro-DOHJNAO5">
    <h2 class="flex items-center text-xl font-semibold astro-DOHJNAO5">
      ${showReasonLogo ? renderTemplate`<img src="/icon_50.png" width="30" class="mr-1 astro-DOHJNAO5" alt="Reason Logo">` : renderTemplate`<span class="astro-DOHJNAO5"></span>`}
      ${title}
      <span class="astro-DOHJNAO5">&rarr;</span>
    </h2>
    <p class="astro-DOHJNAO5">
      ${body}
    </p>
  </a>
</li>`;
}, "/Users/paulbacchus/Work/astro-reason/src/components/Card.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro & Reason.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
    <h1 class="text-4xl font-bold astro-J7PV25F6">
      Welcome to <span class="text-gradient astro-J7PV25F6">Astro &</span><span class="text-red-600 astro-J7PV25F6">
        Reason</span>
    </h1>
    <p class="instructions astro-J7PV25F6">
      To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
      <strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
    <ul role="list" class="link-card-grid astro-J7PV25F6">
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-J7PV25F6" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-J7PV25F6" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-J7PV25F6" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-J7PV25F6" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "/dogs", "title": "Dogs", "body": "Look at some dogs \u{1F436}", "showReasonLogo": true, "class": "astro-J7PV25F6" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "/functions", "title": "Functions", "body": "Call a \u03BB function", "showReasonLogo": true, "class": "astro-J7PV25F6" })}
    </ul>
  </main>
` })}`;
}, "/Users/paulbacchus/Work/astro-reason/src/pages/index.astro");

const $$file = "/Users/paulbacchus/Work/astro-reason/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
