import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/ui/countdown";
import { ArrowLeft, Banknote, QrCodeIcon, Store, Wallet } from "lucide-react";

const data = {
  virtual_account: [
    {
      name: "BSI",
      logo: "bsi.webp",
    },
    {
      name: "BNI",
      logo: "bni.webp",
    },
    {
      name: "BCA",
      logo: "bca.webp",
    },
    {
      name: "BRI",
      logo: "bri.webp",
    },
    {
      name: "MANDIRI",
      logo: "mandiri.webp",
    },
  ],
  e_wallet: [
    {
      name: "DANA",
      logo: "dana.webp",
    },
    {
      name: "OVO",
      logo: "ovo.webp",
    },
    {
      name: "SHOPEEPAY",
      logo: "shopeepay.webp",
    },
    {
      name: "LINKAJA",
      logo: "linkaja.webp",
    },
    {
      name: "GOPAY",
      logo: "gopay.webp",
    },
  ],
  qris: [
    {
      name: "SHOPEEPAY",
      logo: "shopeepay.webp",
    },
    {
      name: "GOPAY",
      logo: "gopay.webp",
    },
  ],
  retail: [
    {
      name: "INDOMARET",
      logo: "indomaret.webp",
    },
    {
      name: "ALFAMART",
      logo: "alfamart.webp",
    },
  ],
};

function PaymentCard(props: { name: string; image: string }) {
  return (
    <div className="flex justify-center items-center border rounded p-2 cursor-pointer">
      <input type="radio" name="" id="" className="hidden" />
      <img
        src={"/payment-merchant/" + props.image}
        alt={props.name}
        style={{ width: "auto", height: "35px" }}
      />
    </div>
  );
}

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
              <p className="mb-2 font-bold text-primary uppercase">
                PAYMENT METHOD
              </p>
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
                    <Banknote size={20} />
                    <h5 className="font-semibold tracking-tight">
                      VIRTUAL ACCOUNT
                    </h5>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.virtual_account.map((item, index) => {
                      return (
                        <PaymentCard
                          key={index}
                          name={item.name}
                          image={item.logo}
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Wallet size={20} />
                    <h5 className="font-semibold tracking-tight">E-WALLET</h5>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.e_wallet.map((item, index) => {
                      return (
                        <PaymentCard
                          key={index}
                          name={item.name}
                          image={item.logo}
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Store size={20} />
                    <h5 className="font-semibold tracking-tight">RETAIL</h5>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.retail.map((item, index) => {
                      return (
                        <PaymentCard
                          key={index}
                          name={item.name}
                          image={item.logo}
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <QrCodeIcon size={20} />
                    <h5 className="font-semibold tracking-tight">QRIS</h5>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.qris.map((item, index) => {
                      return (
                        <PaymentCard
                          key={index}
                          name={item.name}
                          image={item.logo}
                        />
                      );
                    })}
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
                    <small className="font-semibold">Rp. 0</small>
                  </div>
                </div>
              </div>

              <hr className="my-3" />

              <h5 className="text-right text-xl font-bold mb-4">
                Rp. 1.110.000
              </h5>

              <Link href="/event/this-is-sample-event/purchase">
                <Button variant="default" className="w-full">
                  Lanjutkan
                </Button>
              </Link>
            </div>

            <Link
              href="/event/this-is-sample-event/personal-information"
              className="block"
            >
              <Button variant="outline" className="text-gray-700 w-full">
                <ArrowLeft size={16} className="me-1" /> Kembali
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
