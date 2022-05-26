import { DragEvent, useState } from 'react';

export default function PostIt() {
	const [styleElement, setStyleElement] = useState({
		left: '0px',
		top: '0px',
	});

	const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
		const target = event.target as HTMLDivElement;
		event.stopPropagation();
		target.style.opacity = '2';
	};

	const handleDragEvent = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();

		const target = event.target as HTMLDivElement;

		const leftPosition =
			event.pageX - target.offsetWidth / 2 < 0
				? '0px'
				: `${event.pageX - target.offsetWidth / 2}px`;

		const topPosition =
			event.pageY - target.offsetHeight / 2 < 0
				? '0px'
				: `${event.pageY - target.offsetHeight / 2}px`;

		const elementPosition = { left: leftPosition, top: topPosition };

		setStyleElement(elementPosition);
	};

	const handleDoubleClick = () => {
		const element = document.getElementById('dragtarget');
		if (element && !element.hasChildNodes()) {
			const note = document.createElement('input');
			note.type = 'text';
			note.className = 'note';
			element.appendChild(note);
		}
	};

	return (
		<div
			className='dragNote'
			style={styleElement}
			draggable='true'
			id='dragtarget'
			onDragStart={handleDragStart}
			onDoubleClick={handleDoubleClick}
			onDragEnd={handleDragEvent}
		/>
	);
}
