import { Card } from '../components/card';
import { Layout } from '../components/layout';
import { Overlay } from '../components/overlay';
import BedroomImage from './assets/bedroom.jpeg';
import BedImage from './assets/bed.jpeg';
import { Button } from '../components/button';

const beds = [
    { name: 'Standard Double Bedroom', rate: 100000 },
    { name: 'Classic Standard Room', rate: 50000 },
    { name: 'Classic Double Room', rate: 150000 },
    { name: 'Deluxe Suite with balcony view', rate: 50000 },
    { name: 'Family suite with balcony view', rate: 150000 },
    { name: 'Penthouse suite with balcony view', rate: 50000 }
];

export function RoomsAndSuites() {
    return (
        <>
            <Overlay image={BedroomImage}>
                <h1 className="text-5xl lg:text-6xl font-bold text-white text-center uppercase">Our Rooms And Rate</h1>
            </Overlay>
            <Layout>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16 my-20">
                    {beds.map((bed, id) => (
                        <Card key={id} image={BedImage} label={bed.name}>
                            <li>1 bathroom</li>
                            <li>2 beds</li>
                            <li>2 people</li>

                            <div className='flex justify-between mt-5'>
                                <h1 className="text-xl text-purple-500 font-semibold">{bed.rate.toLocaleString()} per night</h1>
                                <Button>BOOK NOW</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Layout>
        </>
    );
}
