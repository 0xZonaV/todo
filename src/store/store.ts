import {compose, createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {rootReducer} from "./root-reducer";
import {PersistConfig} from "redux-persist/es/types";

export type RootState = ReturnType<typeof rootReducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnchanser = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhansers = composeEnchanser();

export const store = createStore(persistedReducer, undefined, composedEnhansers);
export const persistor = persistStore(store);

