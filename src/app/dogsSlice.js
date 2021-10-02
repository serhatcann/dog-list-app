import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDogsFromApi } from './utils';

export const getDogs = createAsyncThunk('dogs/getDogs', async () => fetchDogsFromApi({}));

const dogSlice = createSlice({
	name: 'dog',
	initialState: {
		dogs: [],
		status: null,
	},
	extraReducers: {
		[getDogs.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getDogs.fulfilled]: (state, action) => {
			state.status = 'success';
			state.dogs = action.payload;
		},
		[getDogs.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default dogSlice.reducer;
