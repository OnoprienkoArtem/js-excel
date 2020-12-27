import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

const normalize = state => ({
  ...state,
  currentStyles: defaultState,
  currentText: '',
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : defaultState;
}
