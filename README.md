# Ctrl+Stream 🎬

Netflix-style movie & TV series web app built with **Next.js (App Router)**, **TypeScript** and **TailwindCSS**, powered by the **TMDB API**.

**Live demo:** [ctrl-stream.vercel.app](https://ctrl-stream.vercel.app)

## Features

- 🎞️ **Featured hero banner** with backdrop art and quick actions
- 🔥 **Trending / upcoming / top-rated carousels** for movies and TV series
- 🔍 **Full-text search** with paginated results
- 📄 **Per-title detail pages** — synopsis, rating, reviews, official site and YouTube trailers
- ▶️ **Playback pages** via a third-party video rendering service
- 🛠️ **Admin panel** backed by MongoDB for managing video source domains
- ⚡ Server components + server actions for data fetching, `plaiceholder` blur placeholders for images
- 📱 Fully responsive, mobile-first UI

## Tech stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router, Server Actions) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Data | TMDB API, Watchmode API, MongoDB (Mongoose) |
| Deploy | Vercel |

## Getting started

```bash
git clone https://github.com/gabrielTor/ctrl-stream.git
cd ctrl-stream
npm install
```

Create a `.env.local` file with:

```bash
MOVIE_DB_API_KEY=your_tmdb_api_key
WATCH_MODE_API_KEY=your_watchmode_api_key
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_URL=http://localhost:3000
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Author

**Dario Gabriel Torres** — [GitHub](https://github.com/gabrielTor) · [LinkedIn](https://www.linkedin.com/in/dario-gabriel-torres-576a3561/)
