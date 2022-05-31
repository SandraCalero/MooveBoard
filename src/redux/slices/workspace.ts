/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface PostItProps {
	id: number;
	variant: string;
	content?: string;
	draggable?: boolean;
	disabled?: boolean;
}

interface workspaceStateProps {
	currentPostItId: number;
	postItList: Array<PostItProps>;
}

const initialState: workspaceStateProps = {
	currentPostItId: 0,
	postItList: [],
};

const workspaceSlice = createSlice({
	name: 'workspace',
	initialState,
	reducers: {
		createPostIt: (state) => {
			state.currentPostItId += 1;
			state.postItList.push({
				id: state.currentPostItId,
				content: '',
				variant: 'postItCreated',
				draggable: true,
			});
		},
		sendToTrash: (state, action) => {
			console.log('Send to trash', state, action.payload);
		},
		editPostIt(state, action) {
			console.log('Action ID', action.payload.id, typeof action.payload.id);
			console.log('State', state.postItList[0]);
			const postItToEdit = state.postItList.filter(
				(postItItem) => postItItem.id.toString === action.payload.id
			);
			console.log('Edit Post it', postItToEdit);
		},
	},
});

export const { createPostIt, sendToTrash, editPostIt } = workspaceSlice.actions;

export default workspaceSlice.reducer;
