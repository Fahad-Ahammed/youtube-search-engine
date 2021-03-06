import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
