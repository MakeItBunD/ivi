import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginAPI } from './services/LoginService';
import moviesSliceReducer from './slices/moviesSlice';
import actorsSliceReducer from './slices/actorsSlice';

const rootReducer = combineReducers({
    [loginAPI.reducerPath]: loginAPI.reducer,
    movies: moviesSliceReducer,
    actors: actorsSliceReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(loginAPI.middleware);
        },
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
