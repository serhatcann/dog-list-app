import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './dogsSlice';

export const store = configureStore({
	reducer: { dogs: dogsReducer },
});
