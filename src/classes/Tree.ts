import { KaboomCtx } from 'kaboom';
import { IGameEntity } from '../interface/IGameEntity';
import { FLOOR_HEIGHT, SPEED } from '../constants';

export default class Tree implements IGameEntity {
  private kaboomInstance: KaboomCtx;

  constructor(kaboomInstance: KaboomCtx) {
    this.kaboomInstance = kaboomInstance;
  }

  spawn(): void {
    this.kaboomInstance.add([
      this.kaboomInstance.rect(48, this.kaboomInstance.rand(32, 96)),
      this.kaboomInstance.area(),
      this.kaboomInstance.outline(4),
      this.kaboomInstance.pos(
        this.kaboomInstance.width(),
        this.kaboomInstance.height() - FLOOR_HEIGHT
      ),
      this.kaboomInstance.anchor('botleft'),
      this.kaboomInstance.color(255, 180, 255),
      this.kaboomInstance.move(this.kaboomInstance.LEFT, SPEED),
      'tree',
    ]);

    this.kaboomInstance.wait(this.kaboomInstance.rand(0.5, 1.5), () =>
      this.spawn()
    );
  }
}
