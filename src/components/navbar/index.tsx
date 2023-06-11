import { Link } from 'raviger';
import { NavLink } from './NavLink';

const Links = [
    { name: 'Home', link: '/' },
    { name: 'Rooms & Suites', link: '/rooms-and-suites' },
    { name: 'Facilities', link: '/facilities' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Offers', link: '/offers' },
    { name: 'Events', link: '/events' }
] as const;

export function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-between h-16">
            <Link href="/">
                <h1 className="text-purple-500 font-bold text-2xl">Hotel Lunar</h1>
            </Link>
            <ul className="flex justify-between gap-8 items-center font-semibold">
                {Links.map((link) => (
                    <NavLink key={link.name} label={link.name} link={link.link} />
                ))}
            </ul>
        </nav>
    );
}
