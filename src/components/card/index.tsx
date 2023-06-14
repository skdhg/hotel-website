interface CardProps {
    image: string;
    label: string;
}

export function Card(props: React.PropsWithChildren<CardProps>) {
    return (
        <div>
            <div className="flex flex-col items-center">
                <img src={props.image} alt={props.label} className="h-[300px]" />
                <h1 className="text-2xl font-semibold py-5">{props.label}</h1>
            </div>
            <div>{props.children}</div>
        </div>
    );
}
