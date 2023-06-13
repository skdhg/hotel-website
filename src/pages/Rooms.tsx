import { Overlay } from '../components/overlay';
import BedroomImage from './assets/bedroom.jpeg';

export function RoomsAndSuites() {
    return (
        <>
            <Overlay image={BedroomImage}>
                <h1 className="text-5xl lg:text-6xl font-bold text-white text-center uppercase">Our Rooms And Rate</h1>
            </Overlay>
        </>
    );
}
