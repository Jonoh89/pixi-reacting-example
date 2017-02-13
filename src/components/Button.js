import * as PIXI from 'pixi.js';

class Button extends PIXI.Sprite {

  constructor(...args) {
    super(...args);
    this.interactive = true;
    this.buttonMode = true;
  }

  set onDown(onMouseDown) {
    this
      .on('mousedown', onMouseDown)
      .on('touchend', onMouseDown);
  }

}

export default Button;