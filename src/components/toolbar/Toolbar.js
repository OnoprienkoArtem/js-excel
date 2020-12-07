import { ExcelComponent } from '@core/ExcelComponent';
import {createToolbar} from './toolbar.template';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: [],
      ...options,
    });
  }

  toHTML() {
    return createToolbar();
  }
}
