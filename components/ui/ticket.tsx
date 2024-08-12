import React from "react";
import moment from "moment";
import { cn, currencyFormatter } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TicketProps {
  name: string;
  price: number;
  date_expired: number;
  description: string;
  is_soldout: boolean;
}

export default function Ticket({ data }: { data: TicketProps }) {
  const isExpired = data.date_expired < Date.now();
  return (
    <div
      className={cn({
        "border border-primary bg-blue-100 rounded p-3 md:p-4": true,
        "border-gray-300 bg-gray-100": isExpired || data.is_soldout,
      })}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 justify-between mb-3 md:mb-2">
        <h5 className="font-semibold">{data.name}</h5>
        {data.is_soldout ? (
          <div>
            <span className="line-through me-2">
              Rp. {currencyFormatter().format(data.price)}
            </span>
            <span className="font-bold text-red-500">SOLD OUT</span>
          </div>
        ) : (
          <span className="font-bold">
            Rp. {currencyFormatter().format(data.price)}
          </span>
        )}
      </div>
      {isExpired ? (
        <small className="text-red-500 font-bold uppercase">
          Sudah berakhir
        </small>
      ) : (
        <div className="flex items-center gap-2">
          <Clock size={12} />
          <small>Berlaku dalam {moment(data.date_expired).fromNow()}</small>
        </div>
      )}
      <hr className="my-2 bg-gray-800" />
      <small>{data.description}</small>
    </div>
  );
}
