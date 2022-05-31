import { createSlice } from '@reduxjs/toolkit';

interface PostItDeletedProps {
	id: number;
	variant: string;
	content?: string;
	draggable?: boolean;
	disabled?: boolean;
}

interface trashspaceProps {
	postItListDeleted: Array<PostItDeletedProps>;
}

const initialState: trashspaceProps = {
	postItListDeleted: [],
};

const trashspaceSlice = createSlice({
	name: 'trashspace',
	initialState,
	reducers: {
		addPostItToTrash: (state, action) => {
			state.postItListDeleted.push({
				id: action.payload.id,
				variant: 'postItDeleted',
				content: action.payload.content,
				disabled: true,
			});
		},
		cleanTrashBin: (state) => {
			console.log(state);
		},
		restoreAllPostIts: (state) => {
			console.log(state);
		},
		deletePostIt: (state) => {
			console.log(state);
		},
		restorePostIt: (state) => {
			console.log(state);
		},
	},
});

export const { cleanTrashBin, restoreAllPostIts, deletePostIt, restorePostIt } =
	trashspaceSlice.actions;

export default trashspaceSlice.reducer;
