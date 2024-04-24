import { KaboomCtx } from 'kaboom';

export function initLoseScene(kaboomInstance: KaboomCtx) {
  kaboomInstance.scene('lose', (scoreValue: number) => {
    kaboomInstance.add([
      kaboomInstance.sprite('bean'),
      kaboomInstance.pos(
        kaboomInstance.width() / 2,
        kaboomInstance.height() / 2 - 80
      ),
      kaboomInstance.scale(2),
      kaboomInstance.anchor('center'),
    ]);

    kaboomInstance.add([
      kaboomInstance.text(scoreValue.toString()),
      kaboomInstance.pos(
        kaboomInstance.width() / 2,
        kaboomInstance.height() / 2 + 80
      ),
      kaboomInstance.scale(2),
      kaboomInstance.anchor('center'),
    ]);

    kaboomInstance.onKeyPress('space', () => kaboomInstance.go('game'));
    kaboomInstance.onClick(() => kaboomInstance.go('game'));
  });
}
