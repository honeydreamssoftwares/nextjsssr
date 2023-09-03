"use client";
import { useSession, getSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  console.log("session", session);
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  const image=(session?.user?.image)? session?.user?.image : '' ;
  
  return (
  
    <>
      <h1>Hi {session?.user?.name} Protected Page</h1><img width={40} src={image} alt="profile" />
      <p>You can view this page because you are signed in.</p>
    </>
  );
}
