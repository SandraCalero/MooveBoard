import { ReactElement } from 'react';
import { render as rendertl, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';

function TestProvider({ children }: { children: ReactElement }) {
	return <Provider store={store}>{children}</Provider>;
}

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	rendertl(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { render };
