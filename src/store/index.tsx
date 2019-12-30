import { createStore } from "redux";
import rootReducer from "../reducers";

export default function store() {
  const isDev = !process.env.production;
  const composeEnhancers =
    // @ts-ignore
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(rootReducer, composeEnhancers());
  return store;
}
