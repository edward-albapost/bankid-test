"use client";

import Image from "next/image";
import { useCriiptoVerify } from "@criipto/verify-react";

export default function Home() {
  const { claims, isLoading, logout, error } = useCriiptoVerify();

  const handleLogout = () => {
    logout({ redirectUri: 'https://bankid-test-blond.vercel.app/' });
  };

  console.log(claims);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      {claims ? (
	<div>
	  <p>{claims.givenname}</p>
	  <p>{claims.surname}</p>
	  <p>{claims.ssn}</p>
	  <button onClick={handleLogout}>LOG OUT</button>
	</div>
	
      ) : (
	<a href="/login">Log in :)</a>
      )}
    </div>
  );
}
