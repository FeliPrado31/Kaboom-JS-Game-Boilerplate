import { KaboomCtx } from 'kaboom';
import { IScene } from '../interface/IScene';

export default class LoseScene implements IScene {
  private kaboomInstance: KaboomCtx;

  constructor(kaboomInstance: KaboomCtx) {
    this.kaboomInstance = kaboomInstance;
  }

  public init() {
    this.kaboomInstance.scene('lose', (scoreValue: number) => {
      this.setupLoseScene(scoreValue);
    });
  }

  private setupLoseScene(scoreValue: number) {
    this.kaboomInstance.add([
      this.kaboomInstance.sprite('bean'),
      this.kaboomInstance.pos(
        this.kaboomInstance.width() / 2,
        this.kaboomInstance.height() / 2 - 80
      ),
      this.kaboomInstance.scale(2),
      this.kaboomInstance.anchor('center'),
    ]);

    this.kaboomInstance.add([
      this.kaboomInstance.text(scoreValue.toString()),
      this.kaboomInstance.pos(
        this.kaboomInstance.width() / 2,
        this.kaboomInstance.height() / 2 + 80
      ),
      this.kaboomInstance.scale(2),
      this.kaboomInstance.anchor('center'),
    ]);

    this.kaboomInstance.onKeyPress('space', () =>
      this.kaboomInstance.go('game')
    );
    this.kaboomInstance.onClick(() => this.kaboomInstance.go('game'));
  }
}
