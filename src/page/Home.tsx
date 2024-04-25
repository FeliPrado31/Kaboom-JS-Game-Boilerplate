import { useEffect, useRef } from 'react';
import { initKaboom } from '../kaboomInit';
import MenuScene from '../scenes/MenuScene';
import GameScene from '../scenes/GameScene'; // Importa la clase GameScene
import Player from '../classes/Player';
import Tree from '../classes/Tree';
import Score from '../classes/Score';
import Floor from '../classes/Floor';
import LoseScene from '../scenes/LoseScene';

// Importa las demás entidades...

function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const kaboomInstance = initKaboom();

    // Crea un objeto con todas tus entidades
    const entities = {
      player: new Player(kaboomInstance),
      tree: new Tree(kaboomInstance),
      score: new Score(kaboomInstance),
      floor: new Floor(kaboomInstance),
    };

    // Crea una instancia de GameScene con tus entidades
    const gameScene = new GameScene(kaboomInstance, entities);

    const menuScene = new MenuScene(kaboomInstance);
    const loseScene = new LoseScene(kaboomInstance);

    menuScene.init();
    gameScene.init(); // Inicializa la escena del juego
    loseScene.init();

    kaboomInstance.go('game');
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Home;
