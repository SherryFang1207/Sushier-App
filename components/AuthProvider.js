"use client";
import { SessionProvider } from "next-auth/react";
import Header from "./headerSection/Header";

export default function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <Header />
      {children}
    </SessionProvider>
  );
}
