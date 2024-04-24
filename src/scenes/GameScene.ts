import { Player } from '../classes/Player';
import { Floor } from '../classes/Floor';
import { Tree } from '../classes/Tree';
import { Score } from '../classes/Score';
import { KaboomCtx } from 'kaboom';

export function initGameScene(kaboomInstance: KaboomCtx) {
  kaboomInstance.scene('game', () => {
    kaboomInstance.setGravity(1600);

    const player = new Player(kaboomInstance);
    new Floor(kaboomInstance);
    const tree = new Tree(kaboomInstance);
    const score = new Score(kaboomInstance);

    tree.spawnTree();

    player.handleCollision(kaboomInstance, () => {
      kaboomInstance.go('lose', score.getScore());
    });

    kaboomInstance.onKeyPress('space', () => player.jump());
    kaboomInstance.onClick(() => player.jump());

    kaboomInstance.onUpdate(() => {
      score.incrementScore();
    });
  });
}
