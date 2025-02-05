# Electron Vite React TypeScript Starter

This repository is a starting point for building applications using Electron, Vite, React, and TypeScript. It provides a basic setup to get you started quickly with these technologies.

## Features

- **Electron**: Build cross-platform desktop applications with JavaScript, HTML, and CSS.
- **Vite**: Next-generation frontend tooling. It's fast and optimized for modern web development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/electron-vite-react-typescript-start.git
   cd electron-vite-react-typescript-start

2. Install the dependencies:

```
npm install
```

*Running the Application*
To start the development server, run:
```
npm run dev
```
This will start both the Vite development server and the Electron application.

*Building the Application*
To build the application for production, run:
```
npm run build
```
This will compile the TypeScript code and bundle the React application using Vite.

Packaging the Application
To package the application for distribution, run one of the following commands:

- For macOS:
```
npm run dist:mac
```
For Windows:
```
npm run dist:win
```

For Linux:
```
npm run dist:linux
```

### Project Structure
- src: Contains the source code for the application.
  - App.tsx: The main React component.
  - electron/: Contains the Electron-specific code.
    - main.ts: The main process code for Electron.
    - preload.cts.ts: The preload script for Electron.
    - pathResolver.ts: Utility functions for resolving paths.
    - util.ts: Utility functions.
- public/: Contains static assets.
- package.json: The npm configuration file.
- vite.config.ts: The Vite configuration file.
- tsconfig.json: The TypeScript configuration file.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
