import Image from "next/image";
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ShareEvent from "@/components/ui/share-event";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CTATicket() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-bold text-sm text-white">Book Tiket</h4>
        <p className="text-sm text-gray-200">
          Harga mulai <strong>Rp. 50.000</strong>
        </p>
      </div>

      <Link href="/event/this-is-sample-event/tickets">
        <Button variant="outline">Beli Sekarang</Button>
      </Link>
    </div>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <main className="mx-auto max-w-7xl p-2 md:p-4">
        <div className="space-y-2 md:space-y-4">
          <div className="relative rounded-md overflow-hidden aspect-[19/10] md:aspect-[19/6] ">
            <Image
              className="w-full h-56 object-cover"
              src="/image/2.jpg"
              fill
              alt="Popular Event Image"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="bg-white rounded-md w-full md:w-3/4 md:p-5 p-3">
              <p className="mb-3 font-bold text-primary uppercase">#Comedy</p>

              <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-5">
                StandUpIndo: Pride of Kutaraja - Banda Aceh Expo Present 2024
              </h3>

              <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-gray-500 mb-5">
                <div className="flex gap-2">
                  <Calendar />
                  <span>27 Sep - 29 Sep 2024</span>
                </div>
                <div className="flex gap-2">
                  <Clock />
                  <span>08:00 - 12:00 WIB</span>
                </div>
                <div className="flex gap-2">
                  <MapPin />
                  <span>Taman Budaya Banda Aceh</span>
                </div>
              </div>

              <hr className="my-5" />

              <div className="hidden md:block bg-primary md:p-5 p-3 rounded my-5">
                <CTATicket />
              </div>

              <div className="space-y-3 text-sm">
                <h6 className="font-semibold">Deskripsi:</h6>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur similique, commodi sit quod sequi illum, quos,
                  accusantium placeat maxime reprehenderit sapiente cumque alias
                  quibusdam expedita?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur sint voluptatem doloribus commodi obcaecati cum.
                  Totam quod laudantium accusamus dolores tempora explicabo
                  quibusdam sint iure voluptatibus ex, porro blanditiis ad quasi
                  ratione perferendis consectetur, hic harum ea quam voluptas
                  minus provident molestias? Blanditiis, rem? Ipsam explicabo
                  temporibus voluptatem dignissimos distinctio?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis laboriosam repellendus quibusdam, natus laudantium
                  alias. Eaque quidem officiis ipsum expedita suscipit dolorum
                  minus iure eius delectus iusto eos corporis, facere sint alias
                  provident voluptatum fugit doloremque. Aliquam minima
                  perferendis fugit delectus nihil autem unde in, inventore
                  animi tempora doloribus dolor. Ipsa, quis assumenda saepe
                  sapiente in alias doloribus dolor rerum ab qui iste quae
                  corrupti voluptate, suscipit harum vitae accusantium!
                </p>

                <h6 className="font-semibold">Persyaratan:</h6>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores inventore deleniti adipisci nihil! Temporibus ea et
                  ipsam in quidem corrupti beatae, provident inventore
                  laudantium, nam saepe minus nulla ut ratione hic autem velit
                  odit sint perspiciatis tempora deserunt nobis laborum
                  necessitatibus. Eius molestiae neque iste repellendus
                  doloremque alias temporibus!
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/4 h-fit">
              <div className="bg-white rounded-md p-5 mb-2 md:mb-4">
                <small className="block text-xs text-gray-500 mb-3">
                  Diselenggarakan oleh
                </small>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h5 className="text-sm font-bold">
                      Stand Up Comedy Banda Aceh
                    </h5>
                    <small className="text-xs text-gray-500">
                      79 Followers
                    </small>
                  </div>
                </div>
              </div>

              <ShareEvent />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed md:hidden bottom-0 left-0 bg-primary w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <CTATicket />
        </div>
      </div>
    </>
  );
}
