import { createStore, combineReducers } from 'redux';
import pastasReducer from './Pastas/pastaReducer';

const rootReducer = combineReducers({
  pastas: pastasReducer,
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;