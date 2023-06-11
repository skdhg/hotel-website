import { Link } from 'raviger';
import { Button } from '../components/button';
import { Layout } from '../components/layout';

export function NotFound() {
    return (
        <div className="h-screen grid place-items-center text-center">
            <Layout>
                <div className="mb-5">
                    <h1 className="text-9xl text-purple-700 font-extrabold">404</h1>
                    <p className="text-2xl">Page not found!</p>
                </div>
                <Link href="/">
                    <Button>Return Home</Button>
                </Link>
            </Layout>
        </div>
    );
}
