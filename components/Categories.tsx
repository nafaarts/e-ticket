import { Category } from "@/lib/definitions"
import { MusicIcon, FilmIcon, BookIcon, Gamepad2, ShirtIcon, HeartIcon, BikeIcon, CodeIcon } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"


const IconClass = "absolute text-white opacity-25 group-hover:opacity-50 transition-all w-24 h-24 md:w-36 md:h-36 -top-6 -left-6 rotate-6 shadow-sm";

const categories: Category[] = [
    { id: 1, name: 'Musik', icon: <MusicIcon className={IconClass} /> },
    { id: 2, name: 'Film', icon: <FilmIcon className={IconClass} /> },
    { id: 3, name: 'Buku', icon: <BookIcon className={IconClass} /> },
    { id: 4, name: 'Game', icon: <Gamepad2 className={IconClass} /> },
    { id: 5, name: 'Fashion', icon: <ShirtIcon className={IconClass} /> },
    { id: 6, name: 'Kesehatan', icon: <HeartIcon className={IconClass} /> },
    { id: 7, name: 'Olahraga', icon: <BikeIcon className={IconClass} /> },
    { id: 8, name: 'Teknologi', icon: <CodeIcon className={IconClass} /> },
]

export function CategoryCard({
    id, name, icon
}: Category) {
    return (
        <a href="javascript:void(0)">
            <div className="relative h-20 md:h-32 w-full bg-gradient-to-r from-primary to-orange-300  overflow-hidden rounded group">
                {icon}
                <h3 className="absolute bottom-2 right-2 md:bottom-5 md:right-5 text-sm md:text-lg font-semibold text-white">
                    {name}
                </h3>
            </div>
        </a>
    )
}

export default function Categories() {
    return (
        <section>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">Kategori 👉</h3>
            <Carousel>
                <CarouselContent>
                    {categories.map((category, index) => (
                        <CarouselItem key={index.toString()} className="basis-1/3 lg:basis-1/6">
                            <CategoryCard {...category} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}