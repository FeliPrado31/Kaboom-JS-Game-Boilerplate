import { useEffect, useRef } from 'react';
import { initKaboom } from '../kaboomInit';
import { initGameScene } from '../scenes/GameScene';
import { initLoseScene } from '../scenes/LoseScene';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const kaboomInstance = initKaboom();

    initGameScene(kaboomInstance);
    initLoseScene(kaboomInstance);

    kaboomInstance.go('game');
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default App;
