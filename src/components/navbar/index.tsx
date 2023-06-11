import { useCallback, useState } from 'react';
import { Link } from 'raviger';
import { NavLink } from './NavLink';
import { FiMenu, FiX } from 'react-icons/fi';

const Links = [
    { name: 'Home', link: '/' },
    { name: 'Rooms & Suites', link: '/rooms-and-suites' },
    { name: 'Facilities', link: '/facilities' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Offers', link: '/offers' },
    { name: 'Events', link: '/events' }
] as const;

export function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = useCallback((value: boolean) => {
        return () => {
            setNavOpen(value);
        };
    }, []);

    return (
        <header>
            <nav className="flex flex-row items-center justify-between h-16">
                <Link href="/">
                    <h1 className="text-purple-500 font-bold text-2xl">Hotel Lunar</h1>
                </Link>
                <ul className="hidden lg:flex justify-between gap-8 items-center font-semibold">
                    {Links.map((link) => (
                        <NavLink key={link.name} label={link.name} link={link.link} />
                    ))}
                </ul>
                <div className="lg:hidden text-xl">
                    {navOpen ? <FiX onClick={toggleNav(false)} /> : <FiMenu onClick={toggleNav(true)} />}
                </div>
            </nav>
            {navOpen && (
                <div className="h-screen lg:hidden border-t border-gray-200 py-5">
                    <ul className="space-y-5">
                        {Links.map((link) => (
                            <NavLink
                                key={link.name}
                                label={link.name}
                                link={link.link}
                                mobile
                                onNavigate={() => setNavOpen(false)}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
