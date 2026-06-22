# CopaTracker ⚽ 2026

Plataforma interactiva para seguir el **Mundial FIFA 2026** en tiempo real: fixture dinámico, resultados actualizados automáticamente y simulación visual de cruces eliminatorios.

---

## ✨ Características

- 📅 Fixture completo del Mundial FIFA 2026
- ⚡ Resultados actualizados cada 5 minutos
- 🔍 Buscador y filtros por estado y fase
- 🗂️ Simulador visual de cuadro eliminatorio
- 📱 Diseño responsive (mobile-first)
- 🌐 SEO básico optimizado

---

## 🚀 Instalación

```bash
git clone <repo-url>
cd copatracker
npm install
```

---

## ⚙️ Configuración de API

1. Registrate gratis en [football-data.org](https://www.football-data.org/client/register)
2. Obtené tu API Key desde el dashboard
3. Copiá el archivo de variables de entorno:

```bash
cp .env.example .env.local
```

4. Editá `.env.local` y completá tu clave:

```
FOOTBALL_DATA_API_KEY=tu_api_key_aqui
```

---

## 💻 Ejecución local

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🚢 Deploy en Vercel

1. Subí el proyecto a GitHub
2. Importalo en [vercel.com](https://vercel.com)
3. En **Settings → Environment Variables**, agregá:
   - `FOOTBALL_DATA_API_KEY` = tu clave de API
4. Hacé deploy — Vercel detecta Next.js automáticamente

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14 | Framework principal |
| TypeScript | Tipado estricto |
| Tailwind CSS | Estilos |
| Football Data API | Datos del torneo |

---

## 👩‍💻 Autora

**Ailén Páez** — Desarrolladora de Software

- GitHub: [ailenpaez](https://github.com/ailenpaez)
- LinkedIn: [paezailenj](https://www.linkedin.com/in/paezailenj/)
- Email: [ailenaprendiendotec@gmail.com](mailto:ailenaprendiendotec@gmail.com)

---

## 📄 Licencia

MIT © 2026 Ailén Páez
