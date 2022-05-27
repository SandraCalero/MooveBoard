import './TrashBin.css';

export default function TrashBin() {
	return (
		<div
			id='drop_zone'
			onDrop={(event) => {
				console.log(event);
			}}
			onDragOver={(event) => {
				console.log(event);
			}}
		>
			<p>Arrastra y suelta uno o más archivos a esta zona ...</p>
		</div>
	);
}
