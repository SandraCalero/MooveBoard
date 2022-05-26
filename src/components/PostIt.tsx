import { DragEvent, useState } from 'react';
import './PostIt.css';

export default function PostIt() {
	const [stylePostIt, setStylePostIt] = useState({
		left: '15rem',
		top: '15rem',
	});

	const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
		/* const target = event.target as HTMLDivElement; */
		event.dataTransfer.setData('data', 'dataItem');
		event.stopPropagation();
	};

	const handleDrag = (event: DragEvent<HTMLDivElement>) => {
		event.stopPropagation();
		/* 		const target = event.target as HTMLDivElement;
		target.style.zIndex += 1; */
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
	/* 
	const handleDoubleClick = () => {
		const element = document.getElementById('dragtarget');
		if (element && !element.hasChildNodes()) {
			const note = document.createElement('input');
			note.type = 'text';
			note.className = 'note';
			element.appendChild(note);
		}
	}; */

	return (
		<div
			className='dragNote'
			style={stylePostIt}
			draggable='true'
			id='dragtarget'
			onDragStart={handleDragStart}
			onDragOver={(event) => {
				event.preventDefault();
			}}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
		>
			<textarea
				className='note'
				draggable='true'
				name='note'
				id='note'
				cols={parseInt('20', 10)}
				rows={parseInt('10', 10)}
			/>
		</div>
	);
}
