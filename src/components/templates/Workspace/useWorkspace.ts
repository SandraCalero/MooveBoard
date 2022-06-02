import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPostItToTrash } from 'redux/slices/trashspace';
import { createPostIt, moveToTrash } from 'redux/slices/workspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';

const useWorkspace = () => {
	const dispatch = useDispatch();
	const postItList = useSelector(
		(state: RootState) => state.workspace.postItList
	);

	const initialPostIt: IPostIt = { id: 0, content: '' };

	const [postIt, setPostIt] = useState(initialPostIt);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const shouldOpenModal = (postItInfo: IPostIt) => {
		setIsModalOpen(true);
		setPostIt(postItInfo);
	};

	const shouldCloseModal = () => {
		setIsModalOpen(false);
		setPostIt(initialPostIt);
	};

	const movePostItToTrash = () => {
		dispatch(moveToTrash(postIt));
		dispatch(addPostItToTrash(postIt));
		shouldCloseModal();
	};
	const handleCreatePostIt = () => {
		dispatch(createPostIt());
	};
	return {
		shouldOpenModal,
		handleCreatePostIt,
		movePostItToTrash,
		shouldCloseModal,
		isModalOpen,
		postItList,
	};
};

export default useWorkspace;
