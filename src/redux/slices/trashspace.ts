/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostIt } from 'globals/definitions/postItProps';

interface trashspaceStateProps {
	deletedPostIts: Array<IPostIt>;
}

const localDeletedPostIts = localStorage.getItem('deletedPostIts');

const deletedPostIts: Array<IPostIt> = localDeletedPostIts
	? JSON.parse(localDeletedPostIts)
	: [];

const initialState: trashspaceStateProps = {
	deletedPostIts,
};

const trashspaceSlice = createSlice({
	name: 'trashspace',
	initialState,
	reducers: {
		addPostItToTrash: (state, action: PayloadAction<IPostIt>) => {
			state.deletedPostIts.unshift({
				id: action.payload.id,
				content: action.payload.content,
			});
			localStorage.setItem(
				'deletedPostIts',
				JSON.stringify(state.deletedPostIts)
			);
		},
		clearTrashBin: (state) => {
			state.deletedPostIts = [];
			localStorage.setItem(
				'deletedPostIts',
				JSON.stringify(state.deletedPostIts)
			);
		},
		deletePostIt: (state, action: PayloadAction<number>) => {
			console.log(state, action.payload);
		},
		restorePostIt: (state, action: PayloadAction<IPostIt>) => {
			console.log(state, action.payload);
		},
	},
});

export const { addPostItToTrash, clearTrashBin, deletePostIt, restorePostIt } =
	trashspaceSlice.actions;

export default trashspaceSlice.reducer;
