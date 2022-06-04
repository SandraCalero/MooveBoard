import { Link } from 'react-router-dom';
import useTrashBinLink from './useTrashBinLink';

export default function TrashBinLink() {
	const { trashIcon, isEmpty } = useTrashBinLink();

	return (
		<Link
			to='/trashbin'
			className='flex flex-col items-center no-underline p-0 m-2 text-center hover:opacity-90 active:translate-y-1'
			/* 			onDrop={(event) => console.log(event)}
			onDragOver={() => console.log('Drag over trash icon')} */
		>
			<img className='w-16 h-16' src={trashIcon} alt='Trash bin' />
			{isEmpty ? (
				<span>Trash Bin</span>
			) : (
				<span>
					<strong>Trash Bin</strong>
				</span>
			)}
		</Link>
	);
}
