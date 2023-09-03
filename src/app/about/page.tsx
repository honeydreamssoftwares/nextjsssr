"use client"
import ProtectedPage from "@/components/ProtectedPage";
import { SessionProvider } from "next-auth/react";


export default function Page() {

  return  <SessionProvider><ProtectedPage /></SessionProvider>;
}
