import { createStore, combineReducers } from "redux";
import { productReducer, cartReducer } from "./reducers"; // Importa ambos reducers

// Combina los reducers
const rootReducer = combineReducers({
  products: productReducer, // Estado para la lista de productos
  cart: cartReducer,        // Estado para el carrito de compras
});

// Crea el store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
