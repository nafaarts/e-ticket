import React from "react";
import { Share2, Facebook, Twitter } from "lucide-react";

export default function ShareEvent() {
  return (
    <div className="bg-white p-5 text-gray-500">
      <small className="block mb-3">Bagikan event ini</small>
      <div className="flex items-center gap-4">
        <Facebook size={20} />
        <Twitter size={20} />
        <Share2 size={20} />
      </div>
    </div>
  );
}
