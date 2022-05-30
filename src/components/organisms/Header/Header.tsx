import './Header.css';

interface HeaderProps {
	children: JSX.Element | Array<JSX.Element>;
}

export default function Header({ children }: HeaderProps) {
	return <header className='header'>{children}</header>;
}
