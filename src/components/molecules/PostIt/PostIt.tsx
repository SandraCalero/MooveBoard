import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostIt } from 'redux/slices/workspace';
import './PostIt.css';
import { usePostIt } from './usePostIt';

interface PostItProps {
	id: number;
	content?: string;
	variant: string;
	draggable?: boolean;
	disabled?: boolean;
}

function PostIt({ id, content, variant, draggable, disabled }: PostItProps) {
	const { stylePostIt, handleDrag, handleDragEnd, handleOnContextMenu } =
		usePostIt();
	const dispatch = useDispatch();
	const [state, setState] = useState(content);

	return (
		<div
			className={`postItContainer ${variant}`}
			style={stylePostIt}
			draggable={draggable}
			id={id.toString()}
			onDragStart={() => console.log('DragStart')}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			onContextMenu={handleOnContextMenu}
		>
			<textarea
				onChange={(event) => {
					setState(event.target.value);
				}}
				onBlur={() => dispatch(editPostIt({ id, content: state, variant }))}
				disabled={disabled}
				className='note'
				draggable={draggable}
				name='note'
				id={id.toString()}
				value={state}
			/>
		</div>
	);
}

PostIt.defaultProps = {
	content: '',
	draggable: false,
	disabled: false,
};

export default PostIt;
