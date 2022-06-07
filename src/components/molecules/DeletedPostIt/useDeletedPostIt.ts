import { IPostItWithEvent } from 'globals/definitions/postItProps';
import { useDispatch } from 'react-redux';
import { deletePostIt } from 'redux/reducers/trashspace';
import { restorePostIt } from 'redux/reducers/workspace';

/**
 * It takes the id and content of the post it that was just closed, and then passes it to the showModal
 * function to delete permanetly the post it or to restore it.
 * The `useDeletedPostIt` function is used in the `DeletedPostIt` component
 * @param {IPostItWithEvent}  - IPostItWithEvent - This is the type of the parameter that is passed to
 * the hook. It's an object that contains the id, content and showModal function of the post it.
 * @returns an object with two functions, handleRestore and handleClose.
 */

const useDeletedPostIt = ({ id, content, showModal }: IPostItWithEvent) => {
	const dispatch = useDispatch();

	/**
	 * It dispatches a delete action, then dispatches an action that restores the post-it
	 */
	const handleRestore = () => {
		dispatch(deletePostIt(id));
		dispatch(restorePostIt({ id, content }));
	};

	/**
	 * It takes the id and content of the post it that was just closed, and then passes it to the showModal
	 * function to delete permanetly the post it
	 */
	const handleClose = () => showModal({ id, content });

	return {
		handleRestore,
		handleClose,
	};
};

export default useDeletedPostIt;
