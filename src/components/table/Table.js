import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';
import { shouldResize, isCell } from './table.functions';
import { TableSelection } from './TableSelection';
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

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const target = $target.id(true);
        const current = this.selection.current.id(true);
        const cols = range(current.col, target.col);
        const rows = range(current.row, target.row);
      } else {
        this.selection.select($target);
      }
    }
  }
}

function range(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }

  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index);
}
