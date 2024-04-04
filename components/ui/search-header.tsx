import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function SearchHeader() {
    return (
        <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <Input
                        id="search"
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                        placeholder="Cari Event"
                    />
                </div>
            </div>
        </div>
    )
}
