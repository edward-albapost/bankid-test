"use client";

import Image from "next/image";
import { useCriiptoVerify } from "@criipto/verify-react";

export default function Home() {
  const { claims, isLoading, logout, error } = useCriiptoVerify();

  console.log(claims);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/login">Log in :)</a>
    </div>
  );
}
