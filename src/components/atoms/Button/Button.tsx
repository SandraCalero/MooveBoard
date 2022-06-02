import './Button.css';

interface ButtonProps {
	text?: string;
	icon?: string;
	variant: string;
	altText?: string;
	onClick: () => void;
}

export default function Button({
	text,
	variant,
	icon,
	altText,
	onClick,
}: ButtonProps) {
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
