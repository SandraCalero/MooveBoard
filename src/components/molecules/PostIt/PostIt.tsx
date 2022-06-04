import Button from 'components/atoms/Button/Button';
import { IPostItEditableWithEvent } from 'globals/definitions/postItProps';
import usePostIt from './usePostIt';

export default function PostIt({
	id,
	content,
	disabled,
	showModal,
}: IPostItEditableWithEvent) {
	const {
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
	} = usePostIt({ id, disabled, content, showModal });

	return (
		<div
			className='flex flex-col items-center justify-center bg-yellow shadow-md w-max md:absolute md:cursor-grab'
			style={stylePostIt}
			draggable
			id={id.toString()}
			onDragStart={handleDragStart}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}
			onClick={handleClick}
			aria-hidden='true'
		>
			<Button
				variant='my-0 mx-0 px-2 pt-2 opacity-20 text-xl hover:opacity-100 self-end'
				onClick={handleClose}
				text='X'
			/>
			<textarea
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={isDisabled}
				className='p-2 w-52 h-52 bg-transparent outline-none border-none resize-y md:resize md:cursor-grab focus:cursor-text'
				name='note'
				value={newContent}
			/>
		</div>
	);
}