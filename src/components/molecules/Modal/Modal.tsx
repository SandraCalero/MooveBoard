import warning from 'assets/icons/warning.png';
import Button from 'components/atoms/Button/Button';
import useModal from './useModal';

interface ModalProps {
	title: string;
	message: string;
	isModalOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function Modal({
	isModalOpen,
	message,
	title,
	onConfirm,
	onCancel,
}: ModalProps) {
	const { flex } = useModal({ isModalOpen });

	return (
		<div
			className={`${flex} items-center justify-center z-10 m-0 p-0 w-full h-full absolute inset-0 bg-transparent`}
		>
			<div className='flex flex-col justify-center items-center bg-white max-w-xs h-auto border border-mine-shaft-50 rounded-lg drop-shadow-2xl shadow-2xl'>
				<h2 className='flex items-center p-3 m-2'>{title}</h2>
				<div className='flex items-center p-3 m-0 border-y border-solid border-grey'>
					<img className='m-2 w-10' src={warning} alt='Warning icon' />
					<p className='m-2 text-sm '>{message}</p>
				</div>

				<div className='flex items-center p-3 m-0'>
					<Button
						variant='justify-center w-24 h-12 rounded-lg bg-grey'
						text='Cancel'
						onClick={onCancel}
					/>
					<Button
						variant='justify-center w-24 h-12 rounded-lg bg-blue text-white'
						text='Confirm'
						onClick={onConfirm}
					/>
				</div>
			</div>
		</div>
	);
}
