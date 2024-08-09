import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";
import { Card } from "./card";
import { Event } from "@/lib/definitions";
import { VerifiedIcon } from "lucide-react";
import Link from "next/link";

export default function EventCard(props: Event) {
  const { title, image, date, price, organizer } = props;

  return (
    <Link href="/event/this-is-sample-event">
      <Card className="w-full overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image src={image} fill className="object-cover" alt="Event Image" />
        </AspectRatio>
        <div className="p-3">
          <div className="flex items-center text-xs md:text-sm text-gray-500 mb-1">
            <span>{organizer.name}</span>
            {organizer.isVerified && (
              <VerifiedIcon className="h-3 text-blue-700" />
            )}
          </div>
          <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">
            {title}
          </h3>
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <div className="text-xs md:text-sm font-bold text-primary">
              {price}
            </div>
            <div className="text-xs md:text-sm text-gray-500">{date}</div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
