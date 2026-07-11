# Bundle Builder

## Description
A React-based bundle builder application that allows users to customize their security system by selecting cameras, sensors, accessories, and protection plans. It features a step-by-step accordion interface and a dynamic review panel that calculates real-time pricing and savings.

## Tech Stack
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (for icons)

## Features
- Step-by-step accordion UI for selecting components.
- Dynamic review panel displaying selected items, quantities, and real-time pricing.
- LocalStorage persistence for saving and restoring user configurations.
- Responsive design tailored for mobile, tablet, and desktop views.

## Installation
```bash
npm install
```

## Running Locally
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Production Build
```bash
npm run build
```
This will compile TypeScript and generate production-ready assets in the `dist` folder.

## Folder Structure
- `src/components/`: Reusable React components grouped by feature (bundle builder, review panel, shared UI, etc.).
- `src/context/`: React context for global state management (`BundleContext`).
- `src/hooks/`: Custom hooks for state logic (`useBundle`).
- `src/data/`: Static JSON data for products, sensors, and protection plans.
- `src/types/`: TypeScript interfaces and type definitions.
- `src/utils/`: Utility functions for calculations (`calculateBundleTotal`).

## Design Decisions
- **Context API for State Management:** Utilized React Context to share the bundle state and updater functions across the deeply nested step components and the review panel, avoiding prop drilling.
- **Data-Driven UI:** Products and plans are rendered dynamically from static JSON data files to allow for easy updates to the catalog without touching the view components.

## Trade-offs
- **State Granularity:** The entire bundle state is currently managed in a single context provider. In a very large application, this might cause unnecessary re-renders. A future optimization could involve splitting the context or using memoization (`useMemo`, `useCallback`) to optimize performance.
- **Hardcoded Product Rules:** Some business rules (like the pricing of the unlimited plan) are simplified and handled via specific IDs or hardcoded checks in the utility functions to meet the rapid prototype requirements.

## Screenshots
*(Screenshots placeholders - replace with actual application images)*
![Desktop View](#)
![Mobile View](#)
