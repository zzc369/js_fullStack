export const createStore = (state, storeChange) => {
  const store = state || {};
  const listeners = []; // 组件
  // 订阅发布者
  // listen callback 
  const subscribe = (listen) => listeners.push(listen)
  // const dispatch = (action) => storeChange(store, action);
  const dispatch = (action) => {
    const newStore = storeChange(store, action)
    listeners.forEach(item => {
      item(newStore, store)
    })
  }

  return { store, dispatch,subscribe };
}