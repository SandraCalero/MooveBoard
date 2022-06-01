import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendToTrash } from 'redux/slices/workspace';

/* interface PostItProps {
	id: number;
	content?: string;
	variant: string;
	draggable?: boolean;
	disabled?: boolean;
} */

export const usePostItList = () => {
	const dispatch = useDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [postItId, setPostItId] = useState(0);

	/* To do cambiar param por el objeto post it */
	const openModal = (postId: number) => {
		setIsModalOpen(true);
		setPostItId(postId);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setPostItId(0);
	};
	/* To do  enviar a la trash bin el objeto post it */
	const sendPostItToTrash = () => {
		dispatch(sendToTrash({ id: postItId }));
		closeModal();
	};

	return {
		isModalOpen,
		closeModal,
		openModal,
		sendPostItToTrash,
	};
};

export default usePostItList;
