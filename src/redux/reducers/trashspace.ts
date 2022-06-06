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
			const postItIndex = state.deletedPostIts.findIndex(
				(postIt) => postIt.id === action.payload
			);
			state.deletedPostIts.splice(postItIndex, 1);
			localStorage.setItem(
				'deletedPostIts',
				JSON.stringify(state.deletedPostIts)
			);
		},
	},
});

export const { addPostItToTrash, clearTrashBin, deletePostIt } =
	trashspaceSlice.actions;

export default trashspaceSlice.reducer;
