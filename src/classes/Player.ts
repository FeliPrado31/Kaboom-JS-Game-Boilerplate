// Player.ts
import { GameObj, KaboomCtx } from 'kaboom';
import { JUMP_FORCE } from '../constants';
import { IGameEntity } from '../interface/IGameEntity';

export default class Player implements IGameEntity {
  private player: GameObj;
  private kaboomInstance: KaboomCtx;

  constructor(kaboomInstance: KaboomCtx) {
    this.kaboomInstance = kaboomInstance;
    this.player = this.kaboomInstance.add();
  }

  spawn(): void {
    this.player = this.kaboomInstance.add([
      this.kaboomInstance.sprite('bean'),
      this.kaboomInstance.pos(80, 40),
      this.kaboomInstance.area(),
      this.kaboomInstance.body(),
      'player',
    ]);
  }

  jump(): void {
    if (this.player.isGrounded()) {
      this.player.jump(JUMP_FORCE);
    }
  }

  handleCollision(onCollide: () => void): void {
    this.player.onCollide('tree', () => {
      onCollide();
      this.kaboomInstance.burp();
      this.kaboomInstance.addKaboom(this.player.pos);
    });
  }

  getPlayer(): GameObj {
    return this.player;
  }
}
