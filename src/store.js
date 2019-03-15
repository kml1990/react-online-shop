import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// let devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
//   devTools = a => a;
// }

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk)
    // devTools
  )
);

export default store;
