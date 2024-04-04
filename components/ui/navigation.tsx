import { Disclosure } from '@headlessui/react'
import { cn } from "@/lib/utils"
import { CompassIcon } from "lucide-react"

const navigation = [
    { name: 'Jelajahi Event', href: '#', current: false, icon: <CompassIcon className='h-5' /> },
    { name: 'Kategori', href: '#', current: false },
    { name: 'Buat Event', href: '#', current: false },
    { name: 'Tentang Kami', href: '#', current: false },
]

export function Navigation() {
    return (
        <div className="hidden md:block">
            <div className="flex items-center space-x-4">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                            item.current
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-100',
                            'flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export function NavigationResponsive() {
    return (
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
            ))}
        </div>
    )
}