export function createStore() {
  const state = {};
  let listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter(l => l !== fn);
        },
      };
    },
    dispatch() {},
    getState() {},
  };
}
