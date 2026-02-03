import React from "react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/ui/countdown";
import { Ticket, User, Wallet2 } from "lucide-react";

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

              <div className="space-y-6 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Ticket size={20} />
                    <h5 className="font-semibold tracking-tight">
                      DETAIL TIKET
                    </h5>
                  </div>

                  <div className="border p-3 rounded">
                    <table className="text-sm">
                      <tr>
                        <td className="text-gray-600">Nama</td>
                        <td className="px-3">:</td>
                        <td>OTS VIP (Day 11 - 30 Agustus)</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Harga</td>
                        <td className="px-3">:</td>
                        <td>Rp. 380.000</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Deskripsi</td>
                        <td className="px-3">:</td>
                        <td>Price excludes tax & admin fees</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <User size={20} />
                    <h5 className="font-semibold tracking-tight">
                      DATA PELANGGAN
                    </h5>
                  </div>
                  <div className="border p-3 md:p-5 rounded">
                    <table className="text-sm">
                      <tr>
                        <td className="text-gray-600">Nama</td>
                        <td className="px-3">:</td>
                        <td>Budi Budian</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Email</td>
                        <td className="px-3">:</td>
                        <td>budi@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">No. Handphone</td>
                        <td className="px-3">:</td>
                        <td>+639203820328</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">No. Indentitas</td>
                        <td className="px-3">:</td>
                        <td>1227237829292</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Tanggal Lahir</td>
                        <td className="px-3">:</td>
                        <td>23 Juli 2028</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Jenis Kelamin</td>
                        <td className="px-3">:</td>
                        <td>Laki-laki</td>
                      </tr>
                      <tr>
                        <td className="text-gray-600">Asal Kota</td>
                        <td className="px-3">:</td>
                        <td>Sabang</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Wallet2 size={20} />
                    <h5 className="font-semibold tracking-tight">
                      METODE PEMBAYARAN
                    </h5>
                  </div>
                  <div className="border p-3 md:p-5 rounded text-gray-600">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="border-r pr-4">
                        <img
                          src="/payment-merchant/bca.webp"
                          alt="Logo BCA"
                          style={{
                            height: 20,
                          }}
                        />
                      </div>
                      <p className="text-sm font-semibold">
                        BCA Virtual Account
                      </p>
                    </div>

                    <small>
                      Pembayaran dapat dilakukan dengan aplikasi BCA Mobile.
                    </small>
                  </div>
                </div>
              </div>
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
