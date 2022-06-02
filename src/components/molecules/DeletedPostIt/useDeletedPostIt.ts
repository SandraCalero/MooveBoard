import { IPostItWithEvent } from 'globals/definitions/postItProps';
import { useDispatch } from 'react-redux';
import { restorePostIt } from 'redux/slices/trashspace';

export const useDeletedPostIt = ({
	id,
	content,
	shouldOpenModal,
}: IPostItWithEvent) => {
	const dispatch = useDispatch();

	const handleOnContextMenu = () => {
		console.log('Click derecho');
	};

	const handleRestore = () => dispatch(restorePostIt({ id, content }));

	const handleClose = () => shouldOpenModal({ id, content });

	return {
		handleRestore,
		handleOnContextMenu,
		handleClose,
	};
};

export default useDeletedPostIt;
