import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrashSpace from '../organisms/trashspace/TrashSpace';
import WorkSpace from '../organisms/workspace/WorkSpace';

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WorkSpace />} />
				<Route path='/trashspace' element={<TrashSpace />} />
			</Routes>
		</BrowserRouter>
	);
}
