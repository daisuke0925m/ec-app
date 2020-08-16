import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

// import {ProdutsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      // products: ProductsReucers,
      users: UsersReducer,
    })
  )
}