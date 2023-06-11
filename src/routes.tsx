import { NotFound } from './pages/404';
import { Home } from './pages/Home';

export const routes = {
    '/': () => <Home />,
    '*': () => <NotFound />
};
