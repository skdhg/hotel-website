import { ActiveLink } from 'raviger';

interface NavLinkProps {
    label: string;
    link: string;
}

export function NavLink(props: NavLinkProps) {
    const { label, link } = props;

    return (
        <li>
            <ActiveLink
                href={link}
                className="cursor-pointer text-gray-600 hover:text-purple-500"
                activeClass="cursor-pointer text-purple-500 hover:text-purple-500/60"
            >
                {label}
            </ActiveLink>
        </li>
    );
}
