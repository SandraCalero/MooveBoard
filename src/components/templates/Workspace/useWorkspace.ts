import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPostItToTrash } from 'redux/reducers/trashspace';
import {
	createPostIt,
	moveToTrash,
	switchToDarkMode,
} from 'redux/reducers/workspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';

const useWorkspace = () => {
	const dispatch = useDispatch();
	const postItList = useSelector(
		(state: RootState) => state.workspace.postItList
	);
	const darkMode = useSelector((state: RootState) => state.workspace.darkMode);

	const initialPostIt: IPostIt = { id: 0, content: '' };

	const [postIt, setPostIt] = useState(initialPostIt);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modeText = darkMode ? 'Light' : 'Dark';

	const showModal = (postItInfo: IPostIt) => {
		setIsModalOpen(true);
		setPostIt(postItInfo);
	};

	const hideModal = () => {
		setIsModalOpen(false);
		setPostIt(initialPostIt);
	};

	const movePostItToTrash = () => {
		dispatch(moveToTrash(postIt));
		dispatch(addPostItToTrash(postIt));
		hideModal();
	};
	const handleCreatePostIt = () => {
		dispatch(createPostIt());
	};

	const handleDarkMode = () => {
		dispatch(switchToDarkMode());
	};

	return {
		isModalOpen,
		postItList,
		modeText,
		showModal,
		handleCreatePostIt,
		movePostItToTrash,
		hideModal,
		handleDarkMode,
	};
};

export default useWorkspace;
