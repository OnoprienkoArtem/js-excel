import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';
import { $ } from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(50);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log(event.target.dataset.resize);
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizer"]');

      console.log($parent);
    }
  }
}
