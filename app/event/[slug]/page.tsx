"use client";

import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
      <div className="space-y-3 md:space-y-8">
        <h4>this is detail page.</h4>

        <p>slug: {params.slug}</p>
      </div>
    </main>
  );
}
