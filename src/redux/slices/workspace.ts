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

const localPostItList = localStorage.getItem('postItList');
const localCurrentPostItId = localStorage.getItem('currentPostItId');

const postItList: Array<PostItProps> = localPostItList
	? JSON.parse(localPostItList)
	: [];
const currentPostItId: number = localCurrentPostItId
	? JSON.parse(localCurrentPostItId)
	: 0;

const initialState: workspaceStateProps = {
	currentPostItId,
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
			localStorage.setItem(
				'currentPostItId',
				JSON.stringify(state.currentPostItId)
			);
		},
		sendToTrash: (state, action: PayloadAction<{ id: number }>) => {
			const postItIndex = state.postItList.findIndex(
				(postIt) => postIt.id === action.payload.id
			);
			state.postItList.splice(postItIndex, 1);
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
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
