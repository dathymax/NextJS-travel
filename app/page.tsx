import Search from "@/components/features/search";
import HeroBanner from "@/components/layouts/hero";
import Destinations from "@/components/sections/destinations";
import NearBy from "@/components/sections/nearby";
import SomeWhere from "@/components/sections/somewhere";
import Subscribe from "@/components/sections/subscribe";
import Testimonials from "@/components/sections/testimonials";
import Trending from "@/components/sections/trending";


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
            <SomeWhere tourList={tourList} />
            <Trending />
            <Destinations />
            <NearBy />
            <Testimonials />
            <Subscribe />
        </main>
    )
}
