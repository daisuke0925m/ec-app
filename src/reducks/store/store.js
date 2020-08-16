import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router"

// import {ProdutsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      fouter: connectRouter(history),
      // products: ProductsReucers,
      users: UsersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}