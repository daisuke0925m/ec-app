import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

// Import reducers
import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {


    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    return reduxCreateStore( // オリジナル createStore の別名
        combineReducers({
            products: ProductsReducer,
            router: connectRouter(history),
            users: UsersReducer,
        }),
        applyMiddleware(
            logger,
            routerMiddleware(history),
            thunk
        )
    );
}