import { DragEvent, useState } from 'react';
import './PostIt.css';

export default function PostIt() {
	const [stylePostIt, setStylePostIt] = useState({
		left: 'auto',
		top: 'auto',
	});

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

	return (
		<div
			className='postItContainer'
			style={stylePostIt}
			/* draggable='true' */
			id='dragtarget'
			onDragStart={() => console.log('DragStart')}
			onDragOver={(event) => console.log(event)}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
		>
			<textarea
				onChange={(event) => console.log(event.target.value)}
				disabled
				className='note'
				/* draggable='true' */
				name='note'
				id='note'
			/>
		</div>
	);
}
