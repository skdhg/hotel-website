import { PageRoutes } from './components/navbar';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { RoomsAndSuites } from './pages/Rooms';

type Routes = Record<(typeof PageRoutes)[number]['link'] | '*', () => React.JSX.Element>;

export const routes = {
    '/': () => <Home />,
    '/rooms-and-suites': () => <RoomsAndSuites />,
    '*': () => <NotFound />
} as Routes;
