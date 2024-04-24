# Kaboom.js Game Starter with React and Vite

This project is an implementation of a basic game using Kaboom.js, a game development library for JavaScript. The goal of this project is to demonstrate how to structure and organize a game project following the SOLID principles and best practices for object-oriented programming in TypeScript. It also integrates with React and Vite to provide a modern and efficient development experience.

The base game implementation follows the [Kaboom.js intro tutorial](https://kaboomjs.com/doc/intro).

## Features

- Implementation of a basic game based on the Kaboom.js intro tutorial
- Integration with React and Vite for a modern development setup
- Organized and modular project structure
- Adherence to the SOLID principles
- Use of TypeScript for better type safety
- Separation of concerns into classes and modules
- TypeScript configuration and custom types for Kaboom.js

## Prerequisites

- Node.js
- npm (Node.js package manager)

## Installation

1. Clone this repository: `git clone https://github.com/FeliPrado31/Kaboom-JS-Game-Boilerplate.git mygame`
2. Navigate to the project directory: `cd mygame`
3. Install dependencies: `npm install`

## Running

To start the project in development mode, run the following command:

```
npm run dev
```

This will compile the TypeScript code, start the Vite development server, and open the game in your default browser.

## Project Structure

```
src/
  components/
    App.tsx
  classes/
    Floor.ts
    Player.ts
    Score.ts
    Tree.ts
  scenes/
    GameScene.ts
    LoseScene.ts
  constants.ts
  kaboomInit.ts
```

- `components/`: React components
- `classes/`: Classes representing game entities
- `scenes/`: Functions for initializing game scenes
- `constants.ts`: Constants used in the project
- `kaboomInit.ts`: Function for initializing the Kaboom.js instance

## Contributing

If you'd like to contribute to this project, feel free to submit your pull requests. You can also open issues to report bugs or suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
