import Button from 'components/atoms/Button/Button';
import { IPostItWithEvent } from 'globals/definitions/postItProps';
import restorePostIt from 'assets/icons/restorePostIt.png';
import useDeletedPostIt from './useDeletedPostIt';
import './DeletedPostIt.css';

export default function DeletedPostIt({
	id,
	content,
	showModal,
}: IPostItWithEvent) {
	const { hideContextMenu, handleRestore, handleClose } = useDeletedPostIt({
		id,
		content,
		showModal,
	});

	return (
		<div
			className='postItContainer deleted'
			id={id.toString()}
			onClick={hideContextMenu}
			aria-hidden='true'
		>
			<div className='restoreAndClose'>
				<Button
					variant='restore'
					onClick={handleRestore}
					icon={restorePostIt}
				/>
				<Button variant='closePostIt' onClick={handleClose} text='X' />
			</div>
			<div className='note'>{content}</div>
		</div>
	);
}
