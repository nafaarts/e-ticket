import { Event } from "@/lib/definitions"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import EventCard from "./ui/event-card"

const events: Event[] = [
    {
        id: "1",
        title: "Hacktoberfest 2021",
        image: "/image/3.jpg",
        date: "1 - 31 Oktober 2021",
        location: "Online",
        price: "Gratis",
        organizer: {
            name: "DigitalOcean",
            isVerified: true,
        },
        category: {
            id: 1,
            name: "Hackathon",
            icon: null,
        },
    },
    {
        id: "2",
        title: "Next.js Conf 2021",
        image: "/image/4.jpg",
        date: "26 Oktober 2021",
        location: "Online",
        price: "Rp 100.000",
        organizer: {
            name: "Vercel",
            isVerified: true,
        },
        category: {
            id: 2,
            name: "Conference",
            icon: null,
        },
    },
    {
        id: "3",
        title: "JAMstack Conf 2021",
        image: "/image/2.jpg",
        date: "6 - 7 Oktober 2021",
        location: "Online",
        price: "Rp 200.000",
        organizer: {
            name: "Netlify",
            isVerified: false,
        },
        category: {
            id: 2,
            name: "Conference",
            icon: null,
        },
    },
    {
        id: "4",
        title: "React Summit 2021",
        image: "/image/1.jpeg",
        date: "15 Oktober 2021",
        location: "Online",
        price: "Rp 150.000",
        organizer: {
            name: "React Summit",
            isVerified: false,
        },
        category: {
            id: 2,
            name: "Conference",
            icon: null,
        },
    },
]

function shuffle<Type>(array: Type[]): Type[] {
    const disordered = array.toSorted(() => Math.random() - 0.5);
    return disordered;
};

export default function ThisWeek() {
    return (
        <section>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">Minggu Ini ☝️</h3>
            <Carousel>
                <CarouselContent>
                    {shuffle(events).map((event) => (
                        <CarouselItem key={event.id} className="basis-1/2 lg:basis-1/4">
                            <EventCard {...event} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}