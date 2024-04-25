import { KaboomCtx } from 'kaboom';
import { FLOOR_HEIGHT } from '../constants';
import { IGameEntity } from '../interface/IGameEntity';

export default class Floor implements IGameEntity {
  private kaboomInstance: KaboomCtx;

  constructor(kaboomInstance: KaboomCtx) {
    this.kaboomInstance = kaboomInstance;
  }
  spawn(): void {
    this.kaboomInstance.add([
      this.kaboomInstance.rect(this.kaboomInstance.width(), FLOOR_HEIGHT),
      this.kaboomInstance.outline(4),
      this.kaboomInstance.pos(0, this.kaboomInstance.height()),
      this.kaboomInstance.anchor('botleft'),
      this.kaboomInstance.area(),
      this.kaboomInstance.body({ isStatic: true }),
      this.kaboomInstance.color(127, 200, 255),
    ]);
  }
}
