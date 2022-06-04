/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostIt, IPostItEditable } from 'globals/definitions/postItProps';

type PostItId = Pick<IPostIt, 'id'>;

interface workspaceStateProps {
	currentPostItId: number;
	postItList: Array<IPostItEditable>;
}

const localPostItList = localStorage.getItem('postItList');
const localCurrentPostItId = localStorage.getItem('currentPostItId');

const postItList: Array<IPostItEditable> = localPostItList
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
			state.postItList.unshift({
				id: state.currentPostItId,
				content: '',
				disabled: true,
			});
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
			localStorage.setItem(
				'currentPostItId',
				JSON.stringify(state.currentPostItId)
			);
		},
		restorePostIt: (state, action: PayloadAction<IPostIt>) => {
			state.postItList.push({ ...action.payload, disabled: true });
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		moveToTrash: (state, action: PayloadAction<PostItId>) => {
			const postItIndex = state.postItList.findIndex(
				(postIt) => postIt.id === action.payload.id
			);
			state.postItList.splice(postItIndex, 1);
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		restoreAllPostIts: (state, action: PayloadAction<Array<IPostIt>>) => {
			const restoredPostIts = action.payload.map((postIt) => ({
				...postIt,
				disabled: true,
			}));
			state.postItList = [...state.postItList, ...restoredPostIts];
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		editPostIt(state, action: PayloadAction<IPostIt>) {
			state.postItList.forEach((postIt) => {
				if (postIt.id === action.payload.id) {
					postIt.content = action.payload.content;
				}
			});
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
	},
});

export const {
	createPostIt,
	restorePostIt,
	moveToTrash,
	restoreAllPostIts,
	editPostIt,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;