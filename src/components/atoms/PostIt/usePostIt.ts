import { DragEvent, useState } from 'react';

export const usePostIt = () => {
	const [stylePostIt, setStylePostIt] = useState({});

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

	return {
		stylePostIt,
		handleDrag,
		handleDragEnd,
		handleOnContextMenu,
	};
};

export default usePostIt;
