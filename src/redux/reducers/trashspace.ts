/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostIt, IPostItEditable } from 'globals/definitions/postItProps';

/* Defining the shape of the state. */
interface trashspaceStateProps {
	deletedPostIts: Array<IPostIt>;
}

/* Getting the localStorage item called deletedPostIts. */
const localDeletedPostIts = localStorage.getItem('deletedPostIts');

/* Checking if there is a localStorage item called deletedPostIts. If there is, it will parse it and
set it to deletedPostIts. If there isn't, it will set it to an empty array. */
const deletedPostIts: Array<IPostIt> = localDeletedPostIts
	? JSON.parse(localDeletedPostIts)
	: [];

/* Setting the initial state of the redux store. */
const initialState: trashspaceStateProps = {
	deletedPostIts,
};

/* Creating a slice of the redux store. */
const trashspaceSlice = createSlice({
	name: 'trashspace',
	initialState,
	reducers: {
		/* Adding a postIt to the trash. */
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
		/* Adding all the postIts to the trash. */
		addAllToTrash: (state, action: PayloadAction<Array<IPostItEditable>>) => {
			const newDeletedPostIts = action.payload.map((postIt) => ({
				id: postIt.id,
				content: postIt.content,
			}));
			state.deletedPostIts = [...state.deletedPostIts, ...newDeletedPostIts];
			localStorage.setItem(
				'deletedPostIts',
				JSON.stringify(state.deletedPostIts)
			);
		},
		/* Clearing the trash bin. */
		clearTrashBin: (state) => {
			state.deletedPostIts = [];
			localStorage.setItem(
				'deletedPostIts',
				JSON.stringify(state.deletedPostIts)
			);
		},
		/* Deleting a postIt from the trash. */
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

export const { addPostItToTrash, addAllToTrash, clearTrashBin, deletePostIt } =
	trashspaceSlice.actions;

export default trashspaceSlice.reducer;
