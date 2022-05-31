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
					event.preventDefault();
					event.stopPropagation();
					const payload = {
						id: event.target.id,
						content: event.target.value,
					};
					dispatch(editPostIt(payload));
				}}
				disabled={disabled}
				className='note'
				draggable={draggable}
				name='note'
				id={id.toString()}
				value={content}
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
