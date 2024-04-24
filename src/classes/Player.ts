import { GameObj, KaboomCtx } from 'kaboom';
import { JUMP_FORCE } from '../constants';

export class Player {
  private player: GameObj;

  constructor(kaboomInstance: KaboomCtx) {
    this.player = kaboomInstance.add([
      kaboomInstance.sprite('bean'),
      kaboomInstance.pos(80, 40),
      kaboomInstance.area(),
      kaboomInstance.body(),
    ]);
  }

  jump() {
    if (this.player.isGrounded()) {
      this.player.jump(JUMP_FORCE);
    }
  }

  handleCollision(kaboomInstance: KaboomCtx, onCollide: () => void) {
    this.player.onCollide('tree', () => {
      onCollide();
      kaboomInstance.burp();
      kaboomInstance.addKaboom(this.player.pos);
    });
  }

  getPlayer() {
    return this.player;
  }
}
