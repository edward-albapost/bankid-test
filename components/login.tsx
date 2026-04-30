"use client";

import Image from "next/image";
import React from "react";
import { useCriiptoVerify } from "@criipto/verify-react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const BANKID_COLOR = "#183E4F";
const FREJA_COLOR  = "#3E3A94";

const methods = [
  {
    acrValue:   "urn:grn:authn:se:bankid:same-device",
    label:      "BankID på den här enheten",
    hint:       "Öppnar BankID-appen",
    color:      BANKID_COLOR,
    icon:       "/bankid.png",
    iconAlt:    "BankID",
    iconWidth:  46,
    iconHeight: 38,
  },
  {
    acrValue:   "urn:grn:authn:se:bankid:another-device:qr",
    label:      "BankID med QR-kod",
    hint:       "Skanna med en annan enhet",
    color:      BANKID_COLOR,
    icon:       "/bankid.png",
    iconAlt:    "BankID",
    iconWidth:  46,
    iconHeight: 38,
  },
  {
    acrValue:   "urn:grn:authn:se:frejaid",
    label:      "Fortsätt med Freja eID",
    hint:       "Freja eID+ krävs",
    color:      FREJA_COLOR,
    icon:       "/freja.png",
    iconAlt:    "Freja eID",
    iconWidth:  30,
    iconHeight: 30,
  },
] as const;

const chevron = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M5 2.5l4.5 4.5L5 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function EIDLogin() {
  const { isInitializing, loginWithRedirect } = useCriiptoVerify();

  return (
    <div className="bg-white border border-[#e8e8e8] rounded-2xl px-7 pt-8 pb-7 max-w-[400px] w-full shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] box-border">
      <p className="text-[10.5px] font-medium tracking-[0.1em] uppercase text-gray-400 mb-2">
											       Säker inloggning
      </p>
      <h1 className="text-[22px] font-medium text-gray-900 leading-tight mb-1">
										 Logga in
      </h1>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
								  Välj din e-legitimation nedan
      </p>

      <div className="flex flex-col gap-2">
        {methods.map(({ acrValue, label, hint, color, icon, iconAlt, iconWidth, iconHeight }, i) => (
          <React.Fragment key={acrValue}>
            {i === 2 && <hr className="border-0 border-t border-gray-100 my-1" />}

            <button
              className="flex items-center gap-3 w-full h-[52px] pl-3.5 pr-4 rounded-[10px] border-0 cursor-pointer text-left box-border hover:brightness-110 active:scale-[0.985]"
              style={{ backgroundColor: color }}
              onClick={() => loginWithRedirect({ acrValues: acrValue })}
            >
              <span className="shrink-0 flex items-center justify-center w-10 h-7">
                <Image src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} style={{ objectFit: "contain" }} />
              </span>

              <span className="flex-1 flex flex-col gap-px">
                <span className="text-[15px] font-medium text-white leading-tight">{label}</span>
                <span className="text-[11px] text-white/65 leading-tight">{hint}</span>
              </span>

              <span className="shrink-0 opacity-55 flex items-center">{chevron}</span>
            </button>
          </React.Fragment>
        ))}
      </div>

      <p className="mt-5 pt-4 border-t border-gray-100 text-[11.5px] text-gray-400 text-center leading-relaxed">
														  Krypterad anslutning &nbsp;·&nbsp; BankID utfärdat av din bank
      </p>
    </div>
  );
}
