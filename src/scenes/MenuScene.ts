// menuScene.ts
import { KaboomCtx, Vec2 } from 'kaboom';
import Button from '../components/button';
import { IScene } from '../interface/IScene';

export default class MenuScene implements IScene {
  private kaboomInstance: KaboomCtx;
  private text: string = 'Start';
  private pos: Vec2;

  constructor(kaboomInstance: KaboomCtx) {
    this.kaboomInstance = kaboomInstance;
    this.pos = this.kaboomInstance.vec2(
      this.kaboomInstance.width() / 2,
      this.kaboomInstance.height() / 2 - 80
    );
  }

  public init() {
    this.kaboomInstance.scene('menu', () => {
      const button = new Button(
        this.kaboomInstance,
        this.text,
        this.pos,
        this.handleStart
      );
      button.render();
    });
  }

  private handleStart = () => {
    console.log('oh hi');
  };
}
