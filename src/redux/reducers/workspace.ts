/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostIt, IPostItEditable } from 'globals/definitions/postItProps';
import { sortAsc, sortDes } from 'utils/orderBy';

type PostItId = Pick<IPostIt, 'id'>;

interface workspaceStateProps {
	currentPostItId: number;
	postItList: Array<IPostItEditable>;
	orderBy: string;
	darkMode: boolean;
}

const localPostItList = localStorage.getItem('postItList');
const localCurrentPostItId = localStorage.getItem('currentPostItId');
const localDarkMode = localStorage.getItem('darkMode');
const localOrdeBy = localStorage.getItem('orderBy');

const postItList: Array<IPostItEditable> = localPostItList
	? JSON.parse(localPostItList)
	: [];

const currentPostItId: number = localCurrentPostItId
	? JSON.parse(localCurrentPostItId)
	: 0;

const darkMode: boolean = localDarkMode ? JSON.parse(localDarkMode) : false;

const orderBy: string = localOrdeBy || 'DES';

if (darkMode) {
	document.documentElement.classList.toggle('dark');
}

const initialState: workspaceStateProps = {
	currentPostItId,
	postItList,
	darkMode,
	orderBy,
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
			if (state.orderBy === 'DES') {
				sortDes(state.postItList);
			} else {
				sortAsc(state.postItList);
			}
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
			localStorage.setItem(
				'currentPostItId',
				JSON.stringify(state.currentPostItId)
			);
		},
		restorePostIt: (state, action: PayloadAction<IPostIt>) => {
			state.postItList.push({ ...action.payload, disabled: true });
			if (state.orderBy === 'DES') {
				sortDes(state.postItList);
			} else {
				sortAsc(state.postItList);
			}
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		restoreAllPostIts: (state, action: PayloadAction<Array<IPostIt>>) => {
			const restoredPostIts = action.payload.map((postIt) => ({
				...postIt,
				disabled: true,
			}));
			state.postItList = [...state.postItList, ...restoredPostIts];
			if (state.orderBy === 'DES') {
				sortDes(state.postItList);
			} else {
				sortAsc(state.postItList);
			}
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		moveToTrash: (state, action: PayloadAction<PostItId>) => {
			const postItIndex = state.postItList.findIndex(
				(postIt) => postIt.id === action.payload.id
			);
			state.postItList.splice(postItIndex, 1);
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		moveAllToTrash: (state) => {
			state.postItList = [];
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		editPostIt: (state, action: PayloadAction<IPostIt>) => {
			state.postItList.forEach((postIt) => {
				if (postIt.id === action.payload.id) {
					postIt.content = action.payload.content;
				}
			});
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
		},
		orderByDate: (state) => {
			if (state.orderBy === 'DES') {
				sortAsc(state.postItList);
				state.orderBy = 'ASC';
			} else {
				sortDes(state.postItList);
				state.orderBy = 'DES';
			}
			localStorage.setItem('postItList', JSON.stringify(state.postItList));
			localStorage.setItem('orderBy', JSON.stringify(state.orderBy));
		},
		switchToDarkMode: (state) => {
			const modeStatus = document.documentElement.classList.toggle('dark');
			state.darkMode = modeStatus;
			localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
		},
	},
});

export const {
	createPostIt,
	restorePostIt,
	restoreAllPostIts,
	moveToTrash,
	moveAllToTrash,
	editPostIt,
	orderByDate,
	switchToDarkMode,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
