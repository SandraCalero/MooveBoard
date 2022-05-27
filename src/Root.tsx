import TrashSpace from 'components/templates/Trashspace/TrashSpace';
import WorkSpace from 'components/templates/Workspace/WorkSpace';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
