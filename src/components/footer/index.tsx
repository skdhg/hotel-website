import { Layout } from '../layout';

export function Footer() {
    return (
        <footer className="bg-neutral-700 text-white py-16">
            <Layout>
                <div className="flex flex-row justify-between">
                    <div className="space-y-5">
                        <div>
                            <h1 className="text-3xl font-bold">Hotel Lunar</h1>
                            <p className="font-thin text-sm">Will give you the comfort you deserve</p>
                        </div>
                        <ul className="font-semibold">
                            <li>Address: Road 12, Peace Avenue, Edo, Ekiti</li>
                            <li>Phone number: +2349061504648</li>
                            <li>Email: oluwadamilolafaj@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uppercase font-semibold">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Rooms & Rates</li>
                            <li>Facilities</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uppercase font-semibold">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Snap Chat</li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </footer>
    );
}
