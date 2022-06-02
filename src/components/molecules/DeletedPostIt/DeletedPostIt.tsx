import Button from 'components/atoms/Button/Button';
import { IPostItWithEvent } from 'globals/definitions/postItProps';
import useDeletedPostIt from './useDeletedPostIt';

export default function DeletedPostIt({
	id,
	content,
	shouldOpenModal,
}: IPostItWithEvent) {
	const { handleOnContextMenu, handleClose } = useDeletedPostIt({
		id,
		content,
		shouldOpenModal,
	});

	return (
		<div
			className='postItContainer'
			id={id.toString()}
			onContextMenu={handleOnContextMenu}
		>
			<Button variant='closePostIt' onClick={handleClose} text='X' />
			<div className='note'>{content}</div>
		</div>
	);
}
