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
			className={`flex flex-col items-center border-none m-2 p-0 bg-transparent hover:opacity-90 active:translate-y-1 ${variant}`}
			onClick={onClick}
		>
			{icon && <img className='h-4/5 w-4/5' src={icon} alt={altText} />}
			{text}
		</button>
	);
}

Button.defaultProps = {
	text: '',
	icon: '',
	altText: '',
};
