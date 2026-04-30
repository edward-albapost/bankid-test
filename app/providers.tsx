"use client";

import { CriiptoVerifyProvider } from '@criipto/verify-react';

export function IduraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CriiptoVerifyProvider
      domain="samples.criipto.id"
      clientID="urn:criipto:samples:criipto:verify-react"
      redirectUri="http://localhost:3000"
      sessionStore={typeof window !== "undefined" ? window.localStorage : undefined}
      prompt="login"
    >
      {children}
    </CriiptoVerifyProvider>
 )
}
