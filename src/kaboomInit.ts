import kaboom, { KaboomCtx } from 'kaboom';

export function initKaboom(): KaboomCtx {
  const kaboomInstance = kaboom();
  kaboomInstance.loadSprite('bean', 'sprites/bean.png');
  return kaboomInstance;
}
