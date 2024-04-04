import { PopularEvent } from "@/lib/definitions"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const popularEvents: PopularEvent[] = [
    {
        title: "Event 1",
        image: "/image/1.jpeg"
    },
    {
        title: "Event 2",
        image: "/image/2.jpg"
    },
    {
        title: "Event 3",
        image: "/image/4.jpg"
    }
]

export function PopularEventCard({
    title,
    image
}: PopularEvent) {
    return (
        <a href="javascript:void(0)" className="bg-white shadow-lg rounded-lg overflow-hidden">
            <AspectRatio ratio={4 / 2} className="relative">
                <Image
                    className="w-full h-56 object-cover"
                    src={image}
                    fill
                    alt="Popular Event Image"
                />
                <div className="hidden md:block absolute top-2 left-2 p-1 rounded bg-gradient-to-r from-primary to-orange-300 text-xs text-white font-semibold">
                    <span>Popular</span>
                </div>
            </AspectRatio>
        </a>
    )
}

export default function PopularEvent() {
    return (
        <section>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">Lagi Rame 🔥</h3>
            {/* carousel 3 in md viewport and 1 in sm viewport */}
            <Carousel>
                <CarouselContent>
                    {popularEvents.map((event, index) => (
                        <CarouselItem key={index.toString()} className="basis-1/2 lg:basis-1/3">
                            <PopularEventCard {...event} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </section>
    )
}