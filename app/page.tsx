import HeroBanner from "@/components/hero";
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
            <TourPage tourList={tourList} />
        </main>
    )
}
