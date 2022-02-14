import { createStore, combineReducers } from 'redux';
import pastasReducer from './Pastas/pastaReducer';
import ricesReducer from './rices/riceReducer';

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rices: ricesReducer
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;