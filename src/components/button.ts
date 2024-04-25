// button.ts
import { KaboomCtx, Vec2 } from 'kaboom';

export default class Button {
  private kaboomInstance: KaboomCtx;
  private text: string;
  private pos: Vec2;
  private callback: () => void;
  private btn: any;

  constructor(
    kaboomInstance: KaboomCtx,
    text: string,
    pos: Vec2,
    callback: () => void
  ) {
    this.kaboomInstance = kaboomInstance;
    this.text = text;
    this.pos = pos;
    this.callback = callback;
  }

  public render() {
    this.btn = this.kaboomInstance.add([
      this.kaboomInstance.rect(240, 80, { radius: 8 }),
      this.kaboomInstance.pos(this.pos),
      this.kaboomInstance.area(),
      this.kaboomInstance.scale(1),
      this.kaboomInstance.anchor('center'),
      this.kaboomInstance.outline(4),
    ]);

    this.btn.add([
      this.kaboomInstance.text(this.text),
      this.kaboomInstance.anchor('center'),
      this.kaboomInstance.color(0, 0, 0),
    ]);

    this.btn.onHoverUpdate(this.onHoverUpdate);
    this.btn.onHoverEnd(this.onHoverEnd);
    this.btn.onClick(this.callback);
  }

  private onHoverUpdate = () => {
    const t = this.kaboomInstance.time() * 10;
    this.btn.color = this.kaboomInstance.hsl2rgb((t / 10) % 1, 0.6, 0.7);
    this.btn.scale = this.kaboomInstance.vec2(1.2);
    this.kaboomInstance.setCursor('pointer');
  };

  private onHoverEnd = () => {
    this.btn.scale = this.kaboomInstance.vec2(1);
    this.btn.color = this.kaboomInstance.rgb();
  };
}
