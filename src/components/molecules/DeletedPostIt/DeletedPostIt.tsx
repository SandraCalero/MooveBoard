import Button from 'components/atoms/Button/Button';
import { IPostItWithEvent } from 'globals/definitions/postItProps';
import restorePostIt from 'assets/icons/restorePostIt.png';
import useDeletedPostIt from './useDeletedPostIt';

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
			className='flex flex-col items-center justify-center bg-yellow shadow-md w-max'
			id={id.toString()}
			onClick={hideContextMenu}
			aria-hidden='true'
		>
			<div className='flex justify-between w-full px-2 pt-2 items-start'>
				<Button
					variant='h-8 w-8 m-0 opacity-20 hover:opacity-100 hover:after:content-["Restore"] after:text-sm'
					onClick={handleRestore}
					icon={restorePostIt}
				/>
				<Button
					variant='h-6 w-6 m-0 opacity-20 text-xl hover:opacity-100'
					onClick={handleClose}
					text='X'
				/>
			</div>
			<div className='break-words p-2 w-52 basis-52  bg-transparent'>
				{content}
			</div>
		</div>
	);
}
