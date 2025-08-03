Pokémon Explorer

A Next.js application to browse Pokémon data from the PokeAPI, featuring a paginated list of Pokémon and detailed views for each Pokémon. The app is built with TypeScript, Tailwind CSS, and Shadcn/UI components for a responsive and modern UI.

## Getting Started
Install Dependencies: Ensure you have Node.js (version 18 or higher) installed. Then, install the project dependencies:
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design and Component Decisions

PokemonCard Component: A reusable component (components/PokemonCard.tsx) that displays a Pokémon’s name, ID, and sprite in a card format.
PokemonList Component: Manages the paginated list of Pokémon, displaying multiple PokemonCard components in a grid layout.
PokemonDetails Component: Displays detailed information for a selected Pokémon such as types, fetched when a card is clicked.
Layout and Routing: Uses Next.js’s App Router (app/ directory) for routing. The main page (app/page.tsx) shows the Pokémon list, and a dynamic route (app/pokemon/[id].tsx) handles Pokémon details.

## Shadcn/UI Component Choices

Card: Used in PokemonCard for its clean structure. The Card, CardHeader, CardTitle, and CardContent components provide a consistent layout for displaying Pokémon data
Button: Used for pagination controls (Next/Previous buttons) in the PokemonList component.

## Design Deviations

Image size:  I chose a fixed 96x96 pixel size for the Image component to balance clarity and performance, as larger sprites could slow down the page.
Hover Effects: Added hover:shadow-lg to PokemonCard for better interactivity feedback
Capitalization: Used CSS (capitalize) to format Pokémon names ( “pikachu” to “Pikachu”) for better readability

## State Management Approach

## API Interaction Strategy

## Challenges Encountered & Solutions
