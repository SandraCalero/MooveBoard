import './Button.css';
import newPostIt from 'assets/icons/newPostIt.svg';

interface ButtonProps {
	text?: string;
	variant: string;
}

function Button({ text, variant }: ButtonProps) {
	return (
		<button name='button' type='button' className={variant}>
			{text}
			<img src={newPostIt} alt='Create new Post It' />
		</button>
	);
}

Button.defaultProps = {
	text: '',
};

export default Button;
