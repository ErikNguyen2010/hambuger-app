import { combineReducers, createStore } from "redux";
import { baiTapBurgerReducer } from "./reducer/baiTapBurgerReducer";

const rootReducer = combineReducers ({
    baiTapBurgerReducer,
   
});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());