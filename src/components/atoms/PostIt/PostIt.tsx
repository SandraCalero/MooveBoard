import { DragEvent, useState } from 'react';
import './PostIt.css';

interface PostItProps {
	id: string;
	content?: string;
	variant: string;
	draggable: boolean;
	disabled: boolean;
}

function PostIt({ id, content, variant, draggable, disabled }: PostItProps) {
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

	return (
		<div
			className={`postItContainer ${variant}`}
			style={stylePostIt}
			draggable={draggable}
			id={id}
			onDragStart={() => console.log('DragStart')}
			onDragOver={(event) => console.log(event)}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			onContextMenu={handleOnContextMenu}
		>
			<textarea
				onChange={(event) => console.log(event.target.value)}
				disabled={disabled}
				className='note'
				draggable={draggable}
				name='note'
				id='note'
			>
				{content}
			</textarea>
		</div>
	);
}

PostIt.defaultProps = {
	content: '',
};

export default PostIt;
