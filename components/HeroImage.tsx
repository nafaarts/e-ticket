"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { ImageProps } from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Autoplay from "embla-carousel-autoplay"

export function HeroCard(props: ImageProps) {
    return (
        <AspectRatio ratio={16 / 6} className="rounded-lg w-full">
            <Image {...props} fill className="rounded-md object-cover" />
        </AspectRatio>
    )
}

export default function HeroImage() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}>
            <CarouselContent>
                <CarouselItem>
                    <HeroCard alt="sample" src="/image/1.jpeg" />
                </CarouselItem>
                <CarouselItem>
                    <HeroCard alt="sample" src="/image/2.jpg" />
                </CarouselItem>
                <CarouselItem>
                    <HeroCard alt="sample" src="/image/4.jpg" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
        </Carousel>
    )
}