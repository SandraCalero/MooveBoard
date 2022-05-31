import Button from 'components/atoms/Button/Button';
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
	const {
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
	} = usePostIt({ id, disabled, variant, content });

	return (
		<div
			className={`postItContainer ${variant}`}
			style={stylePostIt}
			draggable={draggable}
			id={id.toString()}
			onDragStart={handleDragStart}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			onContextMenu={handleOnContextMenu}
			onDoubleClick={handleDoubleClick}
		>
			<Button variant='closePostIt' onClick={handleClosePostItClick} text='X' />
			<textarea
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={disabledTextArea}
				className='note'
				name='note'
				value={text}
			/>
		</div>
	);
}

PostIt.defaultProps = {
	content: '',
	draggable: false,
	disabled: true,
};

export default PostIt;
