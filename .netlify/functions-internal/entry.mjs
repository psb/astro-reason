import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.3bf5c58e.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.e34902e4.mjs');
const _page1  = () => import('./chunks/functions@_@astro.5037f7f4.mjs');
const _page2  = () => import('./chunks/dogs@_@astro.78a603c8.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/functions.astro", _page1],["src/pages/dogs.astro", _page2]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dogs.755773e4.css"},{"type":"external","src":"/_astro/index.7ea26b60.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dogs.755773e4.css"}],"routeData":{"route":"/functions","type":"page","pattern":"^\\/functions\\/?$","segments":[[{"content":"functions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/functions.astro","pathname":"/functions","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dogs.755773e4.css"}],"routeData":{"route":"/dogs","type":"page","pattern":"^\\/dogs\\/?$","segments":[[{"content":"dogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dogs.astro","pathname":"/dogs","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/paulbacchus/Work/astro-reason/src/pages/dogs.astro",{"propagation":"none","containsHead":true}],["/Users/paulbacchus/Work/astro-reason/src/pages/functions.astro",{"propagation":"none","containsHead":true}],["/Users/paulbacchus/Work/astro-reason/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/functions.astro":"chunks/pages/functions.astro.f336f909.mjs","/src/pages/index.astro":"chunks/pages/index.astro.4455dd6a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.e34902e4.mjs","\u0000@astro-page:src/pages/functions@_@astro":"chunks/functions@_@astro.5037f7f4.mjs","\u0000@astro-page:src/pages/dogs@_@astro":"chunks/dogs@_@astro.78a603c8.mjs","/Users/paulbacchus/Work/astro-reason/src/reason_react_output/src/components/Dog.js":"_astro/Dog.61d91d7e.js","/Users/paulbacchus/Work/astro-reason/src/reason_react_output/src/components/Lambda.js":"_astro/Lambda.f159f003.js","@astrojs/react/client.js":"_astro/client.2ce19805.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/dogs.755773e4.css","/_astro/index.7ea26b60.css","/500.jpg","/dog.svg","/favicon.svg","/icon_50.png","/laugh.svg","/_astro/Dog.61d91d7e.js","/_astro/Json_decode.0e3b69aa.js","/_astro/Lambda.f159f003.js","/_astro/client.2ce19805.js","/_astro/index.ed373d49.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
