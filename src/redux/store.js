import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cart } from "./cart";

export default function configureStore(preloadedState) {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(cart, preloadedState, composedEnhancers);

  return store;
}
