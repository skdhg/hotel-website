import { Button } from '../components/button';
import { Layout } from '../components/layout';
import HomeImage from './assets/home.jpeg';
import BedImage from './assets/bed.jpeg';
import WeddingImage from './assets/wedding.jpeg';
import { Overlay } from '../components/overlay';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error fewf
import { Navigation, Pagination, Autoplay } from 'swiper';

const galleries = new Array(3).fill([HomeImage, BedImage, WeddingImage]).flat();

export function Home() {
    return (
        <>
            <Overlay image={HomeImage}>
                <h1 className="text-5xl lg:text-6xl font-bold text-white text-center">A Memorable Experience.</h1>
                <Button>Reserve Now</Button>
            </Overlay>
            <Layout>
                <div className="my-32">
                    <h1 className="heading">
                        About <span className="heading-highlight">Hotel Lunar</span>
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-4 grid-flow-row lg:grid-flow-col items-center gap-5">
                        <div className="font-semibold space-y-5 lg:col-span-2">
                            <p>
                                Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons.
                                'Never again' has turned into 'again and again and again.' So today, ladies and
                                gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that
                                people are the ones who can change what they want to change.
                            </p>
                            <p>
                                Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons.
                                'Never again' has turned into 'again and again and again.' So today, ladies and
                                gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that
                                people are the ones who can change what they want to change.
                            </p>
                            <Button>Read More</Button>
                        </div>
                        <div>{/* pure hack gigachad moment */}</div>
                        <img src={BedImage} alt="bed" className="h-72" />
                    </div>
                </div>
            </Layout>
            <Overlay image={WeddingImage}>
                <div className="space-y-16 w-[80%]">
                    <h1 className="text-3xl font-bold text-white text-center">Events & Weddings</h1>
                    <p className="text-white font-semibold text-center">
                        Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never
                        again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel
                        Lunar as a wake-up call and a message to be our messenger that people are the ones who can
                        change what they want to change. Ladies and gentlemen, history keeps repeating itself but
                        doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So
                        today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our
                        messenger that people are the ones who can change what they want to change. Ladies and
                        gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has
                        turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a
                        wake-up call and a message to be our messenger that people are the ones who can change what they
                        want to change.
                    </p>
                </div>
            </Overlay>
            <Layout>
                <div className="my-16 space-y-5">
                    <h1 className="heading text-center">Our Galleries</h1>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            style={{
                                // @ts-expect-error props
                                '--swiper-navigation-color': '#21202F',
                                '--swiper-pagination-color': '#21202F'
                            }}
                            watchSlidesProgress={true}
                            spaceBetween={40}
                            modules={[Pagination, Navigation, Autoplay]}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            centeredSlides
                            navigation
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                760: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                },
                                1280: {
                                    slidesPerView: 4
                                }
                            }}
                            className="mySwiper my-16"
                        >
                            {galleries.map((gallery, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={gallery} alt="img" className="h-64 select-none" draggable={false} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Layout>
        </>
    );
}
