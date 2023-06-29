import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../pages/Home/pokemonSlice";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage
}; 

const rootReducer = combineReducers({
    pokemon: pokemonSlice
}); 

const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: [thunk]
}); 

export const persistor = persistStore(store)