import { Button } from "@/components/ui/button";
import Ticket from "@/components/ui/ticket";
import React from "react";

const data = [
  {
    group: "OTS VIP - ONLINE SALES",
    tickets: [
      {
        name: "OTS VIP (Day 1 - 10 Agustus) ",
        price: 380000,
        date_expired: Date.parse("10 Aug 2024 00:00:00 GMT"),
        description: "Price excludes tax & admin fees",
        is_soldout: false,
      },
      {
        name: "OTS VIP (Day 11 - 30 Agustus) ",
        price: 500000,
        date_expired: Date.parse("30 Aug 2024 00:00:00 GMT"),
        description: "Price excludes tax & admin fees",
        is_soldout: false,
      },
    ],
  },
  {
    group: "REGULER - ONLINE SALES",
    tickets: [
      {
        name: "REGULER FEST",
        price: 250000,
        date_expired: Date.parse("30 Aug 2024 00:00:00 GMT"),
        description: "Price excludes tax & admin fees",
        is_soldout: true,
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <main className="mx-auto max-w-7xl p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full space-y-3">
            <div className="relative bg-white p-5 rounded">
              <p className="mb-2 font-bold text-primary uppercase">PURCHASE</p>
              <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-1">
                StandUpIndo: Pride of Kutaraja - Banda Aceh Expo Present 2024
              </h3>
              <small className="text-xs text-gray-600">
                Diselenggarakan oleh <strong>Stand Up Comedy Banda Aceh</strong>
              </small>

              <hr className="my-6" />

              <img src="/image/position.png" alt="Position" />
            </div>

            <div className="bg-white p-5">
              <p className="mb-2 font-bold text-primary uppercase">TICKETS</p>
              <small className="text-gray-600">
                Beberapa tiket yang tersedia untuk event ini.
              </small>

              <hr className="my-6" />

              <div className="space-y-3">
                {data.map((item, index) => {
                  return (
                    <div key={index}>
                      <h5 className="font-semibold mb-3">{item.group}</h5>
                      <div className="space-y-3">
                        {item.tickets.map((ticket, index) => {
                          return <Ticket key={index} data={ticket} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sticky md:top-[80px] w-full md:w-[400px] h-fit bg-white p-5">
            <h6 className="text-sm font-semibold">Detail Pemesanan</h6>
            <hr className="my-3" />
            <div className="flex justify-between items-center text-gray-700 mb-2">
              <small>Jumlah (2 Tiket)</small>
              <div className="flex items-center gap-1">
                <h6 className="font-bold">Rp. 50.000</h6>
              </div>
            </div>

            <h5 className="text-right text-xl font-bold mb-4">Rp. 100.000</h5>

            <Button variant="default" className="w-full">
              Check out
            </Button>
          </div>
        </div>
      </main>

      <div></div>
    </>
  );
}
