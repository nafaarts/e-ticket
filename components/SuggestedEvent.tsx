import { Event } from "@/lib/definitions";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import EventCard from "./ui/event-card";

const events: Event[] = [
  {
    id: "1",
    title: "Hacktoberfest 2021",
    image: "/image/3.jpg",
    date: "1 - 31 Oktober 2021",
    location: "Online",
    organizer: {
      name: "DigitalOcean",
      isVerified: true,
    },
    price: "Gratis",
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
    organizer: {
      name: "Vercel",
      isVerified: true,
    },
    price: "Rp 100.000",
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
    organizer: {
      name: "Netlify",
      isVerified: false,
    },
    price: "Rp 200.000",
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
    organizer: {
      name: "GitNation",
      isVerified: false,
    },
    price: "Rp 150.000",
    category: {
      id: 2,
      name: "Conference",
      icon: null,
    },
  },
  {
    id: "5",
    title: "GraphQL Asia 2021",
    image: "/image/2.jpg",
    date: "6 - 7 Oktober 2021",
    location: "Online",
    organizer: {
      name: "Hasura",
      isVerified: true,
    },
    price: "Rp 200.000",
    category: {
      id: 2,
      name: "Conference",
      icon: null,
    },
  },
];

export default function SuggestedEvent() {
  return (
    <section>
      <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">
        Rekomendasi untuk kamu 👍
      </h3>
      <Carousel>
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem key={event.id} className="basis-1/2 lg:basis-1/4">
              <EventCard {...event} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
