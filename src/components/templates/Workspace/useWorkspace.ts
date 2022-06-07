import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPostItToTrash, addAllToTrash } from 'redux/reducers/trashspace';
import {
	createPostIt,
	moveAllToTrash,
	moveToTrash,
	orderByDate,
	switchToDarkMode,
} from 'redux/reducers/workspace';
import { RootState } from 'redux/store';
import { IPostIt } from 'globals/definitions/postItProps';
import orderASC from 'assets/icons/orderASC.png';
import orderDES from 'assets/icons/orderDES.png';

/**
 * It returns an object with all the functions and variables that we need to use in our workspace
 * component
 * @returns An object with the following properties:
 * isModalOpen,
 * postItList,
 * modeText,
 * showModal,
 * handleCreatePostIt,
 * movePostItToTrash,
 * handleMoveAllToTrash,
 * handleOrderByDate,
 * hideModal,
 * handleDarkMode,
 */
const useWorkspace = () => {
	const dispatch = useDispatch();

	/* Selectors */
	const postItList = useSelector(
		(state: RootState) => state.workspace.postItList
	);
	const darkMode = useSelector((state: RootState) => state.workspace.darkMode);
	const orderState = useSelector((state: RootState) => state.workspace.orderBy);

	/* Variables */
	const initialPostIt: IPostIt = { id: 0, content: '' };
	const modeText = darkMode ? 'Light' : 'Dark';
	const textOrderBy =
		orderState === 'DES' ? 'Order by oldest' : 'Order by newest';
	const iconOrderBy = orderState === 'DES' ? orderASC : orderDES;

	/* Initial states which will be used to handle the modal behavior */
	const [postIt, setPostIt] = useState(initialPostIt);
	const [isModalOpen, setIsModalOpen] = useState(false);

	/**
	 * It takes a postItInfo object as an argument, sets the isModalOpen state to true, and sets the postIt
	 * state to the postItInfo object
	 * @param {IPostIt} postItInfo - This is the post-it that was clicked on.
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
	 * It dispatches two actions, one to move the post-it to the trash and one to add the post-it to the
	 * trash
	 */
	const movePostItToTrash = () => {
		dispatch(moveToTrash(postIt));
		dispatch(addPostItToTrash(postIt));
		hideModal();
	};

	/**
	 * It dispatches an action to the Redux store to create a new post it
	 */
	const handleCreatePostIt = () => {
		dispatch(createPostIt());
	};

	/**
	 * It dispatches the moveAllToTrash action, which sets the postItList to an empty array, and then
	 * dispatches the addAllToTrash action, which adds the postItList to the trashList
	 */
	const handleMoveAllToTrash = () => {
		dispatch(moveAllToTrash());
		dispatch(addAllToTrash(postItList));
	};

	/**
	 * It dispatches an action to the store that will sort the posts by date
	 */
	const handleOrderByDate = () => {
		dispatch(orderByDate());
	};

	/**
	 * It dispatches an action to the reducer to switch to dark mode
	 */
	const handleDarkMode = () => {
		dispatch(switchToDarkMode());
	};

	return {
		isModalOpen,
		postItList,
		modeText,
		iconOrderBy,
		textOrderBy,
		showModal,
		handleCreatePostIt,
		movePostItToTrash,
		handleMoveAllToTrash,
		handleOrderByDate,
		hideModal,
		handleDarkMode,
	};
};

export default useWorkspace;
