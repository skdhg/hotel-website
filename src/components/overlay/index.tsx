export function Overlay(
    props: React.PropsWithChildren<{
        image: string;
    }>
) {
    return (
        <div className="relative">
            <img src={props.image} alt="img" className="h-[90vh] w-[100vw] filter brightness-50" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5">
                {props.children}
            </div>
        </div>
    );
}
