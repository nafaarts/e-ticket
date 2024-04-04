export type PopularEvent = {
    title: string
    image: string
}

export type Category = {
    id: number
    name: string
    icon: any
}

export type Organizer = {
    name: string
    isVerified: boolean
}

export type Event = {
    id: string
    title: string
    image: string
    date: string
    location: string
    price: string | number
    organizer: Organizer
    category: Category
}