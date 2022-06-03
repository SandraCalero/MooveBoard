import { configureStore } from '@reduxjs/toolkit';
import workspaceReducer from 'redux/slices/workspace';
import trashspaceReducer from 'redux/slices/trashspace';

const store = configureStore({
	reducer: {
		workspace: workspaceReducer,
		trashspace: trashspaceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
