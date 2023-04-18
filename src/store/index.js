import { createStore, combineReducers, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

import weatherReducer from './reducers/weather.reducer';

const rootReducer = combineReducers({
    weather: weatherReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);