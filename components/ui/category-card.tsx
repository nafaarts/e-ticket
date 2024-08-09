import { Category } from "@/lib/definitions";

export function CategoryCard({ id, name, icon }: Category) {
  return (
    <a href="/">
      <div className="relative h-20 md:h-32 w-full bg-primary overflow-hidden rounded group">
        {icon}
        <h3 className="absolute bottom-2 right-2 md:bottom-5 md:right-5 text-sm md:text-lg font-semibold text-white">
          {name}
        </h3>
      </div>
    </a>
  );
}
