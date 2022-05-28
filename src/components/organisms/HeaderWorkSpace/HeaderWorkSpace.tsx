import Button from 'components/atoms/Button/Button';
import TrashBinLink from 'components/molecules/TrashBinLink/TrashBinLink';
import newPostIt from 'assets/icons/newPostIt.png';

export default function HeaderWorkSpace() {
	return (
		<header className='header'>
			<Button
				variant='newPostItButton'
				icon={newPostIt}
				altText='Create new Post It'
			/>
			<TrashBinLink />
		</header>
	);
}
