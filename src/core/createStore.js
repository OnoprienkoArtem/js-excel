export function createStore() {
  const state = {};
  let listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        listeners = listeners.filter(l => l !== fn),
      }
    },
    dispatch() {},
    getState() {},
  };
}
