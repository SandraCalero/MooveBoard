import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTrashBin, deletePostIt } from 'redux/reducers/trashspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';
import { restoreAllPostIts } from 'redux/reducers/workspace';

/**
 * * It returns an object with all the functions and variables that we need to use in our trashspace
 * component
 * @returns An object with the following properties: *
 * - showModal: a function that sets the state of the modal to open and sets the post-it to be deleted
 * - handleClearTrash: a function that clears the trash bin
 * - handleRestoreAll: a function that restores all post-its in the trash bin
 * - hideModal: a function that sets the state of the modal to closed and resets the post-it to be
 * deleted
 * - handleDeletePostIt: a function that deletes the post-it and closes the modal
 * - isModalOpen: a boolean that determines whether the modal is open or closed
 * - deletedPostIts: an array of post-its that have been deleted
 */
const useTrashspace = () => {
	/* A hook that returns a reference to the dispatch function from the Redux store. */
	const dispatch = useDispatch();

	/* Selector */
	const deletedPostIts = useSelector(
		(state: RootState) => state.trashspace.deletedPostIts
	);
	/* Post It initialization */
	const initialPostIt: IPostIt = { id: 0, content: '' };

	/* Initial states which will be used to handle the modal behavior */
	const [postIt, setPostIt] = useState(initialPostIt);
	const [isModalOpen, setIsModalOpen] = useState(false);

	/**
	 * It takes in a postItInfo object and sets the isModalOpen state to true and the postIt state to the
	 * postItInfo object
	 * @param {IPostIt} postItInfo - IPostIt - this is the post-it object that is passed in from the
	 * parent component.
	 */
	const showModal = (postItInfo: IPostIt) => {
		setIsModalOpen(true);
		setPostIt(postItInfo);
	};

	/**
	 * It sets the state of the modal to false and resets the post-it to its initial state
	 */
	const hideModal = () => {
		setIsModalOpen(false);
		setPostIt(initialPostIt);
	};

	/**
	 * It dispatches two actions, one to clear the trash bin and one to restore all the post-its that were
	 * deleted
	 */
	const handleRestoreAll = () => {
		dispatch(clearTrashBin());
		dispatch(restoreAllPostIts(deletedPostIts));
	};

	/**
	 * It dispatches an action to the Redux store that clears the trash bin
	 */
	const handleClearTrash = () => dispatch(clearTrashBin());

	/**
	 * It dispatches an action to delete the post-it and then hides the modal
	 */
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
