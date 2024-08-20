import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Countdown from "@/components/ui/countdown";
import { ArrowLeft } from "lucide-react";

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
                PERSONAL INFORMATION
              </p>
              <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-1">
                StandUpIndo: Pride of Kutaraja - Banda Aceh Expo Present 2024
              </h3>
              <small className="text-xs text-gray-600">
                Diselenggarakan oleh <strong>Stand Up Comedy Banda Aceh</strong>
              </small>

              <hr className="my-6" />

              <div className="space-y-6 mb-10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:1/2">
                    <Label htmlFor="first_name" className="block mb-2">
                      Nama Depan
                    </Label>
                    <Input
                      type="text"
                      id="first_name"
                      placeholder="Masukan Nama Depan"
                    />
                  </div>

                  <div className="w-full md:1/2">
                    <Label htmlFor="last_name" className="block mb-2">
                      Nama Belakang
                    </Label>
                    <Input
                      type="text"
                      id="last_name"
                      placeholder="Masukan Nama Belakang"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-2">
                    Email
                  </Label>
                  <Input type="email" id="email" placeholder="Masukan Email" />
                </div>

                <div>
                  <Label htmlFor="phone_number" className="block mb-2">
                    No. Handphone
                  </Label>
                  <Input
                    type="text"
                    id="phone_number"
                    placeholder="Masukan No. Handphone"
                  />
                </div>

                <div>
                  <Label htmlFor="gender" className="block mb-3">
                    Apakah nomor diatas terhubung ke{" "}
                    <strong className="text-green-600">Whatsapp</strong>?
                  </Label>

                  <RadioGroup defaultValue="false" orientation="horizontal">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="false" />
                      <Label htmlFor="false">Tidak</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="true" />
                      <Label htmlFor="true">Ya</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="identity_number" className="block mb-2">
                    No. Indentitas
                  </Label>
                  <Input
                    type="text"
                    id="identity_number"
                    placeholder="Masukan No. Indentitas"
                  />
                </div>

                <div>
                  <Label htmlFor="gender" className="block mb-3">
                    Jenis Kelamin
                  </Label>

                  <RadioGroup defaultValue="male" orientation="horizontal">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Pria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Wanita</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="date_birth" className="block mb-2">
                    Tanggal Lahir
                  </Label>
                  <Input
                    type="date"
                    id="date_birth"
                    placeholder="Masukan Tanggal Lahir"
                  />
                </div>

                <div>
                  <Label htmlFor="from_city" className="block mb-2">
                    Kota Asal
                  </Label>
                  <Input
                    type="text"
                    id="from_city"
                    placeholder="Masukan Kota Asal"
                  />
                </div>
              </div>

              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Terima syarat dan ketentuan
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Anda menyetujui{" "}
                    <a href="#" className="text-primary">
                      Persyaratan Layanan
                    </a>{" "}
                    dan{" "}
                    <a href="#" className="text-primary">
                      Kebijakan Privasi
                    </a>{" "}
                    kami.
                  </p>
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
              <h6 className="font-semibold text-xs">
                OTS VIP (Day 11 - 30 Agustus)
              </h6>
              <div className="flex justify-between items-center text-gray-700 mb-2">
                <small>2 Tiket</small>
                <div className="flex items-center gap-1">
                  <small className="font-semibold">Rp. 500.000</small>
                </div>
              </div>

              <h5 className="text-right text-xl font-bold mb-4">
                Rp. 1.000.000
              </h5>

              <Link href="/event/this-is-sample-event/payment-method">
                <Button variant="default" className="w-full">
                  Lanjutkan
                </Button>
              </Link>
            </div>

            <Link href="/event/this-is-sample-event/tickets" className="block">
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
