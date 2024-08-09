import { cn } from "@/lib/utils";
import { CompassIcon } from "lucide-react";
import Link from "next/link";

const navigation = [
  {
    name: "Jelajahi Event",
    href: "/event",
    current: false,
    icon: <CompassIcon className="h-5" />,
  },
  { name: "Buat Event", href: "#", current: false },
  { name: "Tentang Kami", href: "#", current: false },
];

export function Navigation() {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-800 hover:bg-gray-100 flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium"
            aria-current={item.current ? "page" : undefined}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function NavigationResponsive() {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
      {navigation.map((item, index) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            item.current
              ? "bg-primary text-white"
              : "text-gray-800 hover:bg-gray-100",
            "block rounded-md px-3 py-2 text-base font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
