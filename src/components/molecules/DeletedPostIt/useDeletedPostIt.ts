import { IPostItWithEvent } from 'globals/definitions/postItProps';
import { useDispatch } from 'react-redux';
import { deletePostIt } from 'redux/reducers/trashspace';
import { MouseEvent, useState } from 'react';
import { restorePostIt } from 'redux/reducers/workspace';

const useDeletedPostIt = ({ id, content, showModal }: IPostItWithEvent) => {
	const dispatch = useDispatch();

	// Show or hide the custom context menu
	const [isShown, setIsShown] = useState(false);

	// Show the custom context menu
	const handleOnContextMenu = (event: MouseEvent<HTMLDivElement>) => {
		// Disable the default context menu
		event.preventDefault();
		setIsShown(true);
	};

	const hideContextMenu = () => {
		setIsShown(false);
	};

	const handleRestore = () => {
		dispatch(deletePostIt(id));
		dispatch(restorePostIt({ id, content }));
		hideContextMenu();
	};

	const handleClose = () => showModal({ id, content });

	return {
		isShown,
		hideContextMenu,
		handleRestore,
		handleOnContextMenu,
		handleClose,
	};
};

export default useDeletedPostIt;
