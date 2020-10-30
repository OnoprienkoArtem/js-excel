import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  // Return layout component
  toHTML() {
    return '';
  }

  onInput(event) {
    console.log('Formula: onInput', event);
  }
}
