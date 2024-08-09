import { PopularEvent as PopularEventType } from "@/lib/definitions";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PopularEventCard } from "./ui/popular-event-card";

const events: PopularEventType[] = [
  {
    title: "Event 1",
    image: "/image/1.jpeg",
  },
  {
    title: "Event 2",
    image: "/image/2.jpg",
  },
  {
    title: "Event 3",
    image: "/image/4.jpg",
  },
];

export default function PopularEvent() {
  return (
    <section>
      <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">
        Lagi Rame 🔥
      </h3>
      <Carousel>
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem
              key={index.toString()}
              className="basis-1/2 lg:basis-1/3"
            >
              <PopularEventCard {...event} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
