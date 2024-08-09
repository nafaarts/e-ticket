import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";
import { PopularEvent as PopularEventType } from "@/lib/definitions";
import Link from "next/link";

export function PopularEventCard({ title, image }: PopularEventType) {
  return (
    <Link
      href="/event/this-is-sample-popular-event"
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <AspectRatio ratio={4 / 2} className="relative">
        <Image
          className="w-full h-56 object-cover"
          src={image}
          fill
          alt="Popular Event Image"
        />
        <div className="hidden md:block absolute top-2 left-2 p-1 rounded bg-green-500 text-white text-xs font-semibold">
          <span>Populer</span>
        </div>
      </AspectRatio>
    </Link>
  );
}
