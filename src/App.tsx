import { Footer } from './components/footer';
import { Layout } from './components/layout';
import { Navbar } from './components/navbar';

function App({ children }: React.PropsWithChildren) {
    return (
        <main className="text-gray-700">
            <Layout>
                <Navbar />
            </Layout>
            {children}
            <Footer />
        </main>
    );
}

export default App;
