import ApplicationLogo from "./ui/application-logo"
import Clients from "./ui/clients"

export default function Footer() {
    return (
        <footer className="bg-white mt-6 py-10">
            <div className="mx-auto max-w-7xl px-6 py-4 ">
                <Clients />
                <hr className="my-10" />
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="w-full lg:w-1/4">
                        <ApplicationLogo />
                        <h4 className="font-bold">PT. ETIKET JAYA INDONESIA</h4>
                        <p className="mt-2 text-xs md:text-sm">Go Work Central Park, Central Park Mall, Level LG, Unit L109-114, Jl. Letjen S. Parman, Daerah Khusus Ibukota Jakarta 11470</p>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h3 className="font-bold text-base md:text-lg">Kontak</h3>
                        <ul className="mt-2 text-sm">
                            <li className="mb-2">test@gmail.com</li>
                            <li className="mb-2">+62 123 456 789</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h3 className="font-bold text-base md:text-lg">Perusahaan</h3>
                        <ul className="mt-2 text-sm">
                            <li className="mb-2">Tentang Kami</li>
                            <li className="mb-2">Syarat & Ketentuan</li>
                            <li className="mb-2">Pusat Layanan</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h3 className="font-bold text-base md:text-lg">Ikuti kami</h3>
                        <p className="mt-2 text-sm">Jl. Teuku Umar No. 1, Banda Aceh, Indonesia</p>
                    </div>
                </div>
                <hr className="my-10" />
                <small>2024 @ eTicket.id</small>
            </div>
        </footer>
    )
}