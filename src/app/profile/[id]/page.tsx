import React from "react";

export default function profile({ params }: { params: { id: string } }) {
  return (
    <main className="flex w-screen h-screen bg-white py-2 gap-3 md:gap-40 justify-center">
      <h1 className="text-black text-4xl font-bold">Hi, {params.id}</h1>
    </main>
  );
}