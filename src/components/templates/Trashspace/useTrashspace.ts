import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTrashBin, deletePostIt } from 'redux/reducers/trashspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';
import { restoreAllPostIts } from 'redux/reducers/workspace';

const useTrashspace = () => {
	const dispatch = useDispatch();
	const deletedPostIts = useSelector(
		(state: RootState) => state.trashspace.deletedPostIts
	);

	const initialPostIt: IPostIt = { id: 0, content: '' };

	const [postIt, setPostIt] = useState(initialPostIt);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = (postItInfo: IPostIt) => {
		setIsModalOpen(true);
		setPostIt(postItInfo);
	};

	const hideModal = () => {
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
		hideModal();
	};

	return {
		showModal,
		handleClearTrash,
		handleRestoreAll,
		hideModal,
		handleDeletePostIt,
		isModalOpen,
		deletedPostIts,
	};
};

export default useTrashspace;
