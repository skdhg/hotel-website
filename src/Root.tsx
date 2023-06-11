import { useRoutes } from 'raviger';
import { routes } from './routes';
import App from './App';

export function Root() {
    const route = useRoutes(routes);

    return <App>{route}</App>;
}
