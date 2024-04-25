import { KaboomCtx } from 'kaboom';
import { IScene } from '../interface/IScene';
import { IGameEntity } from '../interface/IGameEntity';
import Player from '../classes/Player';
import Score from '../classes/Score';

export default class GameScene implements IScene {
  private kaboomInstance: KaboomCtx;
  private entities: { [key: string]: IGameEntity };

  constructor(
    kaboomInstance: KaboomCtx,
    entities: { [key: string]: IGameEntity }
  ) {
    this.kaboomInstance = kaboomInstance;
    this.entities = entities;
  }

  public init() {
    this.kaboomInstance.scene('game', () => {
      this.setupGame();
    });
  }

  private setupGame() {
    this.kaboomInstance.setGravity(1600);
    Object.values(this.entities).forEach((entity) => entity.spawn());

    // Ahora puedes acceder a las entidades por nombre
    const player = this.entities['player'] as Player;
    const score = this.entities['score'] as Score;

    player.handleCollision(() => {
      this.kaboomInstance.go('lose', score.getScore());
    });

    this.kaboomInstance.onKeyPress('space', () => player.jump());
    this.kaboomInstance.onClick(() => player.jump());

    this.kaboomInstance.onUpdate(() => {
      score.incrementScore();
    });
  }
}
