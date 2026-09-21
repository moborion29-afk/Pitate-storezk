const CACHE="pirate-store-v1";

const arquivos=[
"/",
"/index.html",
"/contas.html",
"/produto.html",
"/checkout.html",
"/login.html",
"/admin.html",
"/ilha.html",
"/css/style.css",
"/js/main.js"
];

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE).then(cache=>cache.addAll(arquivos))

);

});

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(resp=>resp||fetch(e.request))

);

});
