import { twMerge } from 'tailwind-merge';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={twMerge(
                'bg-purple-500 hover:bg-purple-500/80 text-white py-1 px-2 font-semibold text-xl',
                props.className
            )}
        />
    );
}
