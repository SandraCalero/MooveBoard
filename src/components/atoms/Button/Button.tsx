import { MouseEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
	text?: string;
	icon?: string;
	variant: string;
	altText?: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, variant, icon, altText, onClick }: ButtonProps) {
	return (
		<button
			name='button'
			type='button'
			className={`button ${variant}`}
			onClick={onClick}
		>
			{icon && <img src={icon} alt={altText} />}
			{text}
		</button>
	);
}

Button.defaultProps = {
	text: '',
	icon: '',
	altText: '',
};

export default Button;
