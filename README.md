# AyudaalYuna

Web estática para Cloudflare Workers. Edita `Day.html`; el build lo copia a
`dist/index.html` para que la página abra en la raíz del sitio (`/`).

## Probar localmente

Con Node.js 22 o superior y npm:

```bash
npm install
npm run dev
```

Abre la dirección que muestre Wrangler (normalmente `http://localhost:8787`).
Después de editar `Day.html`, vuelve a ejecutar el comando para actualizar la copia.

## Publicar desde la terminal

```bash
npx wrangler login
npm run deploy
```

Wrangler publica en tu cuenta de Cloudflare y muestra la URL en `workers.dev`.
Puedes cambiar el nombre del Worker en `wrangler.jsonc` antes del primer despliegue.

## Publicar conectando el repositorio a Cloudflare

En Workers Builds configura:

- Directorio raíz: la raíz de este repositorio.
- Comando de build: `npm run build`.
- Comando de despliegue: `npx wrangler deploy`.
- Nombre del Worker: `ayudaal-yuna`, igual que en `wrangler.jsonc`.

El proyecto usa Workers Static Assets, sin un script de servidor ni base de datos.
Solo se publica el contenido de `dist/`. La imagen y el audio Ogg están incrustados
en el HTML; los reproductores de YouTube y la fuente de Google necesitan internet.

Documentación: [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).
