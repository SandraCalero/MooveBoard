import Button from 'components/atoms/Button/Button';
import TrashBin from 'components/atoms/TrashBin/TrashBin';
import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<Button variant='newPostItButton' />
			<TrashBin />
		</header>
	);
}
