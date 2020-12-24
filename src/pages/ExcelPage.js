import {Page} from '@core/Page';
import {createStore} from '@core/createStore';
import {initialState} from '@/redux/initialState';
import {rootReducer} from '@/redux/rootReducer';
import {debounce, storage} from '@core/utils';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

export class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState);

    const stateListener = debounce(state => {
      storage('excel-state', state);
    }, 300);

    store.subscribe(stateListener);

    const excel = new Excel('#app', {
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return excel.getRoot();
  }
}
