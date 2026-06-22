# CopaTracker ⚽ 2026

Plataforma interactiva para seguir el **Mundial FIFA 2026** en tiempo real con fixture dinámico, resultados actualizados automáticamente y simulación visual de cruces eliminatorios.

## Características

- Fixture completo del Mundial FIFA 2026
- Próximos partidos y resultados en vivo
- Actualización automática cada 5 minutos
- Buscador, filtros y ordenamiento por fecha
- Simulador visual de eliminatorias (octavos → final)
- Página `/about` con perfil de la autora
- Diseño responsive con identidad visual CopaTracker 2026

## Stack tecnológico

- Next.js 15
- React 19
- TypeScript (strict)
- Tailwind CSS
- Football Data API v4

## Requisitos

- Node.js 18+
- Cuenta en [football-data.org](https://www.football-data.org/)

## Instalación

```bash
git clone <tu-repo>
cd copatracker-2026
npm install
```

## Configuración de API

1. Copiá el archivo de ejemplo:

```bash
cp .env.example .env.local
```

2. Obtené tu token en [football-data.org](https://www.football-data.org/client/register).

3. Configurá la variable:

```env
FOOTBALL_DATA_API_KEY=tu_token_aqui
```

La aplicación consume la competición **FIFA World Cup (WC)** mediante:

- `GET /v4/competitions/WC`
- `GET /v4/competitions/WC/matches?season=2026`

Todas las solicitudes usan el header `X-Auth-Token` desde el servidor (Route Handler), sin exponer la key en el cliente.

## Ejecución local

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Importá el repositorio en [Vercel](https://vercel.com/).
2. Agregá la variable de entorno `FOOTBALL_DATA_API_KEY`.
3. Deploy automático con cada push.

## Foto de la autora

Reemplazá `public/author.svg` por tu fotografía en `public/author.jpg` y actualizá `AUTHOR.photo` en `lib/constants.ts` si usás otro nombre de archivo.

## Estructura del proyecto

```
app/
  page.tsx              # Landing
  about/page.tsx        # Sobre la autora
  api/matches/route.ts  # Proxy seguro a Football Data API
components/             # Componentes reutilizables
lib/                    # API, errores, helpers
types/                  # Tipos TypeScript
public/                 # Assets estáticos
```

## Licencia

Proyecto educativo / portfolio.
