import React from "react";
import moment from "moment";
import { cn, currencyFormatter } from "@/lib/utils";
import { Clock } from "lucide-react";
import TicketCounter from "./ticket-counter";

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
        "border bg-white border-gray-300 rounded p-3 md:p-4": true,
        "border bg-gray-100": isExpired || data.is_soldout,
      })}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 justify-between mb-3">
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

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
        <div className="flex items-center gap-2 text-gray-500 italic">
          {isExpired ? (
            <small className="text-red-500 font-bold uppercase">
              Sudah berakhir
            </small>
          ) : (
            <>
              <Clock size={12} />
              <small>Berlaku dalam {moment(data.date_expired).fromNow()}</small>
            </>
          )}
        </div>

        {isExpired || (!data.is_soldout && <TicketCounter />)}
      </div>
      <hr className="my-2 bg-gray-800" />
      <small>{data.description}</small>
    </div>
  );
}
