import { IPostItEditableWithEvent } from 'globals/definitions/postItProps';
import { ChangeEvent, DragEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostIt } from 'redux/slices/workspace';

const usePostIt = ({
	id,
	content,
	disabled,
	showModal,
}: IPostItEditableWithEvent) => {
	const dispatch = useDispatch();

	/* States */
	const [stylePostIt, setStylePostIt] = useState({});
	const [newContent, setNewContent] = useState(content);
	const [isDisabled, setIsDisabled] = useState(disabled);

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

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNewContent(event.target.value);
	};

	const handleClick = () => {
		setIsDisabled(false);
	};

	const handleBlur = () => {
		setIsDisabled(true);
		dispatch(
			editPostIt({
				id,
				content: newContent,
			})
		);
	};

	const handleClose = () => showModal({ id, content });

	return {
		newContent,
		isDisabled,
		stylePostIt,
		handleDragStart,
		handleDrag,
		handleDragEnd,
		handleClose,
		handleChange,
		handleBlur,
		handleClick,
	};
};

export default usePostIt;
