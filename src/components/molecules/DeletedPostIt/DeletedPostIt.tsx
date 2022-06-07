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
			className='flex flex-col items-center justify-center bg-yellow
			shadow-xl w-max dark:bg-cerulean-500 dark:shadow-lg
			dark:shadow-cerulean-700 transition-colors dark:border
			dark:border-grey dark:text-mine-shaft-600'
			id={id.toString()}
			onClick={hideContextMenu}
			aria-hidden='true'
		>
			<div className='flex justify-between w-full px-2 pt-2 items-start'>
				<Button
					variant='h-7 w-7 my-0 mx-0 opacity-20 hover:opacity-100
					relative hover:after:content-["Restore"] after:absolute
					after:left-8 after:bg-white after:rounded-lg after:p-1
					after:text-sm dark:text-mine-shaft-900 dark:opacity-40
					dark:hover:opacity-100 transition-colors'
					onClick={handleRestore}
					icon={restorePostIt}
				/>
				<Button
					variant='h-6 w-6 my-0 mx-0 opacity-20 text-xl
					hover:opacity-100 dark:text-mine-shaft-900 dark:opacity-40
					dark:hover:opacity-100 transition-colors'
					onClick={handleClose}
					text='X'
				/>
			</div>
			<div className='break-words p-2 w-52 basis-52 bg-transparent'>
				{content}
			</div>
		</div>
	);
}
