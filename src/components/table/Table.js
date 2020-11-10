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
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      const sells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      const type = $resizer.data.resize;
      let value;

      $resizer.css({ 
        opacity: 1,
        bottom: '-5000px',
      });

      document.onmousemove = e => {
        if (type === 'col') {
          const delta = e.pageX - coords.right;
          value = coords.width + delta;
          $resizer.css({ right: -delta + 'px' });

          $parent.css({ width: value + 'px' });
          sells.forEach(el => el.style.width = value + 'px');
        } else {
          // const delta = e.pageY - event.pageY;
          // const value = coords.height + delta;
          // $parent.css({ height: value + 'px' });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        $parent.css({ width: value + 'px' });
        sells.forEach(el => el.style.width = value + 'px');

        $resizer.css({ 
          opacity: 0,
          bottom: 0,
          right: 0,
        });
      };
    }
  }
}
