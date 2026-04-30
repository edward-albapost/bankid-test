"use client";

import { CriiptoVerifyProvider } from '@criipto/verify-react';



export function IduraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CriiptoVerifyProvider
      
      domain={process.env.NEXT_PUBLIC_SAMPLE_DOMAIN}
      clientID={process.env.NEXT_PUBLIC_SAMPLE_CLIENT}
      redirectUri={process.env.NEXT_PUBLIC_SAMPLE_REDIRECT_URI}
      sessionStore={null}
      prompt="login"
      checkSession={false}
      // language="sv"
    >
      {children}
    </CriiptoVerifyProvider>
 )
}
