import Link from "next/link";
import { Button } from "./ui/button";

export default function ExploreCTA() {
  return (
    <div className="flex justify-center py-4 md:py-8">
      <Link href="/event">
        <Button
          variant="secondary"
          className="w-full md:w-auto border border-primary text-xs text-primary bg-white px-6"
        >
          Explore lebih banyak!
        </Button>
      </Link>
    </div>
  );
}
