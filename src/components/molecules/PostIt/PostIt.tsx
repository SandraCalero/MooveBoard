import Button from 'components/atoms/Button/Button';
import { IPostItEditableWithEvent } from 'globals/definitions/postItProps';
import usePostIt from './usePostIt';
import './PostIt.css';

export default function PostIt({
	id,
	content,
	disabled,
	shouldOpenModal,
}: IPostItEditableWithEvent) {
	const {
		newContent,
		isDisabled,
		stylePostIt,
		handleDragStart,
		handleDrag,
		handleDragEnd,
		handleOnContextMenu,
		handleClose,
		handleChange,
		handleBlur,
		handleClick,
	} = usePostIt({ id, disabled, content, shouldOpenModal });

	return (
		<div
			className='postItContainer postItCreated'
			style={stylePostIt}
			draggable
			id={id.toString()}
			onDragStart={handleDragStart}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			onContextMenu={handleOnContextMenu}
			onClick={handleClick}
			aria-hidden='true'
		>
			<Button variant='closePostIt' onClick={handleClose} text='X' />
			<textarea
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={isDisabled}
				className='note'
				name='note'
				value={newContent}
			/>
		</div>
	);
}
