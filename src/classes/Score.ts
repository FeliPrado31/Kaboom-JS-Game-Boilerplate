import { GameObj, KaboomCtx } from 'kaboom';
import { IGameEntity } from '../interface/IGameEntity';

export default class Score implements IGameEntity {
  private score: number;
  private scoreLabel!: GameObj;
  private kaboomInstance: KaboomCtx;

  constructor(kaboomInstance: KaboomCtx) {
    this.score = 0;
    this.kaboomInstance = kaboomInstance;
  }
  spawn(): void {
    this.scoreLabel = this.kaboomInstance.add([
      this.kaboomInstance.text(this.score.toString(), { size: 24 }),
      this.kaboomInstance.pos(24, 24),
      this.kaboomInstance.color(0, 0, 0),
    ]);
  }

  incrementScore(): void {
    this.score++;
    this.updateScoreLabel();
  }

  private updateScoreLabel(): void {
    this.scoreLabel.text = `Score: ${this.score}`;
  }

  getScore(): number {
    return this.score;
  }

  getScoreLabel(): GameObj {
    return this.scoreLabel;
  }
}
