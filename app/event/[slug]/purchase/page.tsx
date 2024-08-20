import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/ui/countdown";

export default function Page() {
  return (
    <>
      <div className="sticky top-[64px] md:hidden bg-green-500 p-3 z-50">
        <Countdown />
      </div>

      <main className="mx-auto max-w-7xl p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full space-y-3">
            <div className="relative bg-white md:p-5 p-3 rounded-md">
              <p className="mb-2 font-bold text-primary uppercase">PURCHASE</p>
              <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-1">
                StandUpIndo: Pride of Kutaraja - Banda Aceh Expo Present 2024
              </h3>
              <small className="text-xs text-gray-600">
                Diselenggarakan oleh <strong>Stand Up Comedy Banda Aceh</strong>
              </small>

              <hr className="my-6" />

              <div className="space-y-6 mb-10"></div>
            </div>
          </div>

          <div className="sticky md:top-[80px] w-full md:w-[400px] h-fit space-y-3">
            <div className="hidden md:block bg-green-500 p-3 rounded-md">
              <Countdown />
            </div>

            <div className="bg-white md:p-5 p-3 rounded-md">
              <h6 className="text-sm font-semibold">Detail Pemesanan</h6>
              <hr className="my-3" />
              <div>
                <h6 className="font-semibold text-xs">
                  OTS VIP (Day 11 - 30 Agustus)
                </h6>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <small>2 Tiket</small>
                  <div className="flex items-center gap-1">
                    <small className="font-semibold">Rp. 500.000</small>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="font-semibold text-xs">Pajak Lokal</h6>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <small>11%</small>
                  <div className="flex items-center gap-1">
                    <small className="font-semibold">Rp. 110.000</small>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="font-semibold text-xs">Biaya Platform</h6>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <small>(Tidak dapat dikembalikan)</small>
                  <div className="flex items-center gap-1">
                    <small className="font-semibold">Rp. 7.000</small>
                  </div>
                </div>
              </div>

              <hr className="my-3" />

              <h5 className="text-right text-xl font-bold mb-4">
                Rp. 1.117.000
              </h5>

              <Button variant="default" className="w-full">
                Bayar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
