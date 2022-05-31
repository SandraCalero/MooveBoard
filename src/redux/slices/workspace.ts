/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const local = localStorage.getItem('postItList');
const postItList: Array<PostItProps> = local ? JSON.parse(local) : [];

const initialState: workspaceStateProps = {
	currentPostItId: 0,
	postItList,
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
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		sendToTrash: (state, action) => {
			console.log('Send to trash', state, action.payload);
		},
		editPostIt(state, action: PayloadAction<PostItProps>) {
			state.postItList.forEach((postIt) => {
				if (postIt.id === action.payload.id) {
					postIt.content = action.payload.content;
				}
			});
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
	},
});

export const { createPostIt, sendToTrash, editPostIt } = workspaceSlice.actions;

export default workspaceSlice.reducer;
