# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Measurement Settings UI (this project)

I added a prototype "Measurement Settings" UI built with React and Tailwind (via CDN for quick prototyping).

What I added:
- A left column with profile list (add / edit / delete)
- A right preview area with a screen selector (Screen 1..4)
- A modal form to add / edit profiles

How to use locally:
1. Install dependencies if you don't have them: run `npm install` in the project root.
2. Start dev server: `npm run dev`.
3. The app uses the Tailwind CDN included in `index.html`. For production or a proper dev setup, install Tailwind via NPM and configure it.

Assets (screenshots):
- Place your 4 screenshot image files in `src/assets/` named exactly `screen1.png`, `screen2.png`, `screen3.png`, `screen4.png`.
- If the images are not present a placeholder image will be shown.

Files of interest:
- `src/components/MeasurementSettings.jsx` — main page wire-up
- `src/components/ScreenSelector.jsx` — screen selector (1..4)
- `src/components/ProfileList.jsx`, `ProfileItem.jsx`, `ProfileForm.jsx` — profiles UI and modal

If you want, I can convert the Tailwind CDN usage to a proper Tailwind install (postcss) and add the actual screenshot assets into `src/assets` if you upload them into the workspace.
