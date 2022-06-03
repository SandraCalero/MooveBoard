import { Link } from 'react-router-dom';
import useTrashBinLink from './useTrashBinLink';

export default function TrashBinLink() {
	const { trashIcon, isEmpty } = useTrashBinLink();

	return (
		<Link
			to='/trashbin'
			className='link'
			/* 			onDrop={(event) => console.log(event)}
			onDragOver={() => console.log('Drag over trash icon')} */
		>
			<img src={trashIcon} alt='Trash bin' />
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
