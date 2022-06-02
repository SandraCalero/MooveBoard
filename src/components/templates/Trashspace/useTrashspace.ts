import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTrashBin, deletePostIt } from 'redux/slices/trashspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';
import { restoreAllPostIts } from 'redux/slices/workspace';

const useTrashspace = () => {
	const dispatch = useDispatch();
	const deletedPostIts = useSelector(
		(state: RootState) => state.trashspace.deletedPostIts
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

	const handleRestoreAll = () => {
		dispatch(clearTrashBin());
		dispatch(restoreAllPostIts(deletedPostIts));
	};

	const handleClearTrash = () => dispatch(clearTrashBin());

	const handleDeletePostIt = () => {
		dispatch(deletePostIt(postIt.id));
		shouldCloseModal();
	};

	return {
		shouldOpenModal,
		handleClearTrash,
		handleRestoreAll,
		shouldCloseModal,
		handleDeletePostIt,
		isModalOpen,
		deletedPostIts,
	};
};

export default useTrashspace;
