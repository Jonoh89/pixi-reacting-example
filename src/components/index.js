import * as PIXI from 'pixi.js';
import createComponent from './createComponent';
import Button from './Button';

export const container = (...args) => createComponent(PIXI.Container, ...args);
export const sprite = (...args) => createComponent(PIXI.Sprite, ...args);
export const text = (...args) => createComponent(PIXI.Text, ...args);
export const button = (...args) => createComponent(Button, ...args);
