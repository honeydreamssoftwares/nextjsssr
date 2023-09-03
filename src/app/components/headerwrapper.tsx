"use client"
import { SessionProvider } from "next-auth/react";
import Header from "./header";

export const HeaderWrapper = () => {
  return <SessionProvider><Header /></SessionProvider>;
};
