import { Link } from 'react-router-dom';
import trashBinEmpty from 'assets/icons/trashBinEmpty.svg';
/* import trashBinFull from 'assets/icons/trashBinFull.svg'; */
import './TrashBinLink.css';

export default function TrashBinLink() {
	return (
		<Link
			to='/TrashSpace'
			id='drop_zone'
			onDrop={(event) => console.log(event)}
			onDragOver={(event) => console.log(event)}
		>
			<img src={trashBinEmpty} alt='Trash bin' />
		</Link>
	);
}
