import { ActiveLink, usePath } from 'raviger';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps {
    label: string;
    link: string;
    mobile?: boolean;
    onNavigate?: () => void;
}

export function NavLink(props: NavLinkProps) {
    const { label, link, mobile = false, onNavigate } = props;
    const path = usePath();

    return (
        <li
            className={twMerge(
                mobile ? 'p-5 rounded-md border border-gray-300' : '',
                mobile && path === link ? 'bg-gray-200' : ''
            )}
            onClick={onNavigate}
        >
            <ActiveLink
                href={link}
                className="cursor-pointer text-gray-600 hover:text-purple-500"
                exactActiveClass="cursor-pointer text-purple-500 hover:text-purple-500/60"
            >
                {label}
            </ActiveLink>
        </li>
    );
}
