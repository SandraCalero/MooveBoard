import { Link } from 'react-router-dom';
import trashBinEmpty from 'assets/icons/trashBinEmpty.png';
/* import trashBinFull from 'assets/icons/trashBinFull.png'; */
import './TrashBinLink.css';

export default function TrashBinLink() {
	return (
		<Link
			to='/trashbin'
			className='trashBinLink'
			onDrop={(event) => console.log(event)}
			onDragOver={(event) => console.log(event)}
		>
			<img src={trashBinEmpty} alt='Trash bin' />
			<span>Trash Bin</span>
			{/* <img src={trashBinFull} alt='Trash bin' /> */}
		</Link>
	);
}
