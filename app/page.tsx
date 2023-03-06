import Destinations from "@/components/destinations";
import HeroBanner from "@/components/hero";
import NearBy from "@/components/nearby";
import Search from "@/components/search";
import Subscribe from "@/components/subscribe";
import Testimonials from "@/components/testimonials";
import Trending from "@/components/trending";
import TourPage from "@/features/tours";

export async function getTours() {
    const tourList = [
        {
            id: 1,
            country: "Viet Nam",
            city: "Ha Noi",
            price: 500000,
            image: "/assets/mock/tour-image.jpg",
            startDate: new Date(),
            endDate: new Date(),
            discount: 150000,
            rate: 5
        }
    ];

    return tourList;
}

export default async function Home() {
    const tourList = await getTours();

    return (
        <main>
            <HeroBanner />
            <Search />
            <TourPage tourList={tourList} />
            <Trending />
            <Destinations />
            <NearBy />
            <Testimonials />
            <Subscribe />
        </main>
    )
}
