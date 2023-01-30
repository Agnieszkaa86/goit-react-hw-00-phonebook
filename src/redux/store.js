import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
// Początkowa wartość statusu Redux dla Reducera root,
// jeżeli nie przekaże się parametru preloadedState. 

// Tymczasem wykorzystujemy reducer, który
// zwraca tylko otrzymany status
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer,enhancer);