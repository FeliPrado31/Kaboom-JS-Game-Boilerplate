import { GameObj, KaboomCtx } from 'kaboom';
import { FLOOR_HEIGHT } from '../constants';

export class Floor {
  private floor: GameObj;

  constructor(kaboomInstance: KaboomCtx) {
    this.floor = kaboomInstance.add([
      kaboomInstance.rect(kaboomInstance.width(), FLOOR_HEIGHT),
      kaboomInstance.outline(4),
      kaboomInstance.pos(0, kaboomInstance.height()),
      kaboomInstance.anchor('botleft'),
      kaboomInstance.area(),
      kaboomInstance.body({ isStatic: true }),
      kaboomInstance.color(127, 200, 255),
    ]);
  }

  getFloor() {
    return this.floor;
  }
}
