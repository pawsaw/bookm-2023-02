import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksFeatureName, booksReducer } from '../domain/books/store';
import { counterFeatureName, counterReducer } from '../domain/counter/store';

const rootReducer = combineReducers({
  [booksFeatureName]: booksReducer,
  [counterFeatureName]: counterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
