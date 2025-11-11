# Mellow Flow

Small Next.js app that walks people through a quiz and shows a personalized alcohol-free plan.

## Decisions & Assumptions

- I leaned on the Next.js file-based router and kept everything in three main pages: landing, quiz, and checkout.
- Seperate components (cards, progress bar, badges) live in src/components so styling and behavior stay consistent.
- src/lib holds the quiz questions and result data, keeping content easy to edit without touching UI code.
- src/types centralizes TypeScript definitions so props stay typed and reusable.
- Tailwind is configured in globals.css; theme tokens handle the color system and fonts.
- Gender choice flows through the quiz via useSearchParams, so the checkout page can pick female/male photo sets without extra state.
- Question and answer IDs stay as strings so downstream references remain legible and easy to track.

## Setup

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Build for production: `npm run export`

The static site lands in the out/ folder.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 (via globals.css)
- ESlint & Prettier
