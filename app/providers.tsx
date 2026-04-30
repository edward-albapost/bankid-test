"use client";

import { CriiptoVerifyProvider } from '@criipto/verify-react';

export function IduraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CriiptoVerifyProvider
      domain="albapost-test.test.idura.broker"
      clientID="urn:my:application:identifier:913195"
      redirectUri="https://bankid-test-pq10lmh6h-edward-6868s-projects.vercel.app/"
      sessionStore={typeof window !== "undefined" ? window.localStorage : undefined}
      prompt="login"
    >
      {children}
    </CriiptoVerifyProvider>
 )
}
