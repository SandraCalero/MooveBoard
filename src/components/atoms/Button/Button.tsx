import './Button.css';

interface ButtonProps {
	text?: string;
	icon?: string;
	variant: string;
	altText?: string;
}

function Button({ text, variant, icon, altText }: ButtonProps) {
	return (
		<button name='button' type='button' className={`button ${variant}`}>
			{text}
			{icon && <img src={icon} alt={altText} />}
		</button>
	);
}

Button.defaultProps = {
	text: '',
	icon: '',
	altText: '',
};

export default Button;
