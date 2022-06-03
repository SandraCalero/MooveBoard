import Trashspace from 'components/templates/Trashspace/Trashspace';
import Workspace from 'components/templates/Workspace/Workspace';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

export default function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Workspace />} />
					<Route path='/trashbin' element={<Trashspace />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
