import { Home } from './pages/Home';
import { useRoutes } from 'raviger';

const routes = {
    '/': () => <Home />
};

function App() {
    const route = useRoutes(routes);

    return <main className="text-gray-700">{route}</main>;
}

export default App;
