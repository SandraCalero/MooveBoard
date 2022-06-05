interface HeaderProps {
	children: JSX.Element | Array<JSX.Element>;
}

export default function Header({ children }: HeaderProps) {
	return (
		<header className='flex justify-around items-center p-3'>{children}</header>
	);
}
