import Search from "@/components/features/search";
import HeroBanner from "@/components/layouts/hero";
import Destinations from "@/components/sections/destinations";
import NearBy from "@/components/sections/nearby";
import SomeWhere from "@/components/sections/somewhere";
import Subscribe from "@/components/sections/subscribe";
import Testimonials from "@/components/sections/testimonials";
import Trending from "@/components/sections/trending";
import tour from "@/mock/data/tour.json"

export default async function Home() {
    const tourList = tour;

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
