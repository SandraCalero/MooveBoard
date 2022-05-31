import { ChangeEvent, DragEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostIt, sendToTrash } from 'redux/slices/workspace';

interface PostItProps {
	id: number;
	content?: string;
	variant: string;
	draggable?: boolean;
	disabled?: boolean;
}

export const usePostIt = ({ id, content, disabled, variant }: PostItProps) => {
	const dispatch = useDispatch();

	/* States */
	const [stylePostIt, setStylePostIt] = useState({});
	const [text, setText] = useState(content);
	const [disabledTextArea, setDisabledTextArea] = useState(disabled);

	const handleDragStart = () => console.log('DragStart');

	const handleDrag = (event: DragEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();

		const target = event.target as HTMLDivElement;
		const { pageX, pageY } = event;
		const halfWidthPostIt = target.offsetWidth / 2;
		const halfHeightPostIt = target.offsetHeight / 2;

		const leftPosition =
			pageX - halfWidthPostIt < 0 ? '0' : `${pageX - halfWidthPostIt}px`;

		const topPosition =
			pageY - halfHeightPostIt < 0 ? '0' : `${pageY - halfHeightPostIt}px`;

		const newPostItPosition = { left: leftPosition, top: topPosition };

		setStylePostIt(newPostItPosition);
	};

	const handleOnContextMenu = () => {
		console.log('Click derecho');
	};

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	const handleDoubleClick = () => {
		setDisabledTextArea(false);
	};

	const handleBlur = () => {
		setDisabledTextArea(true);
		dispatch(
			editPostIt({
				id,
				content: text,
				variant,
			})
		);
	};

	const handleClosePostItClick = () => {
		dispatch(sendToTrash(id)); /* Debería abrir el modal */
	};

	return {
		text,
		disabledTextArea,
		stylePostIt,
		handleDragStart,
		handleDrag,
		handleDragEnd,
		handleOnContextMenu,
		handleDoubleClick,
		handleChange,
		handleBlur,
		handleClosePostItClick,
	};
};

export default usePostIt;
