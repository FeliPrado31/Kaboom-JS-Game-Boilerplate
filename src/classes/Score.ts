import { GameObj, KaboomCtx } from 'kaboom';

export class Score {
  private score: number;
  private scoreLabel: GameObj;

  constructor(kaboomInstance: KaboomCtx) {
    this.score = 0;
    this.scoreLabel = kaboomInstance.add([
      kaboomInstance.text(this.score.toString()),
      kaboomInstance.pos(24, 24),
    ]);
  }

  incrementScore() {
    this.score++;
    this.scoreLabel.text = this.score;
  }

  getScore() {
    return this.score;
  }

  getScoreLabel() {
    return this.scoreLabel;
  }
}
