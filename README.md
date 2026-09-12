# Med-Heave

## Project structure

```text
src/
	assets/
		images/       Imported images used by React components
		icons/        Imported SVG icons and logos
	components/    Reusable application components
		ui/           Small shared UI building blocks
	layouts/       Shared page layouts and shells
	pages/         Page-level components
	data/          Static content and local data
	hooks/         Reusable React hooks
	lib/           Shared utilities and integrations
	App.jsx        Application root
	main.jsx       Application entry point
public/
	images/        Static images referenced by URL
	icons/         Static SVG sprites and favicon files
```

## Development

```bash
npm run dev
```

The remaining sections below are the standard Vite setup notes.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
