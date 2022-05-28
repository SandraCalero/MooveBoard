import Button from 'components/atoms/Button/Button';
import backToWorkspace from 'assets/icons/backToWorkspace.png';
import restorePostIt from 'assets/icons/restorePostIt.png';

import { Link } from 'react-router-dom';
import './HeaderTrashBin.css';

export default function HeaderTrashBin() {
	return (
		<header className='header'>
			<Button
				variant='emptyTrash'
				text='Empty trash bin'
				icon={restorePostIt}
				altText='Empty trash bin'
			/>
			<Button
				variant='restorePostIts'
				text='Restore all post-its'
				icon={restorePostIt}
				altText='Restore all post-its'
			/>
			<Link to='/' className='backLink'>
				<img src={backToWorkspace} alt='Trash bin' />
				<span>Back to workspace </span>
			</Link>
		</header>
	);
}
