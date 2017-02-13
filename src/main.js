import 'babel-polyfill';
import * as PIXI from 'pixi.js';
import { container, sprite, text, button } from './components';

const renderer = PIXI.autoDetectRenderer(400, 300, { view: document.getElementById('app') });

const rect = new PIXI.Texture(renderer.generateTexture(new PIXI.Graphics().beginFill(0xCCCCCC).drawRect(0, 0, 100, 100).endFill()));
const smallRect = new PIXI.Texture(renderer.generateTexture(new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0, 0, 50, 50).endFill()));

const onDown = () => alert('hi');

const stage = container({},
  sprite({ texture: rect },
    text({ text: 'HI '},
      button({ x: 10, y: 10, texture: smallRect, onDown })
    )
  )
);

window.requestAnimationFrame(() => {
  renderer.render(stage)
});
