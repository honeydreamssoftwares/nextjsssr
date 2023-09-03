"use client"
import { useSession, getSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
console.log("status",status);
const login_text=(status==='authenticated')?"Logout":"Login";
const login_link=(status==='authenticated')?"/api/auth/signout":"/api/auth/signin";
    return (
      <div className="">
        <header>
          <ul className="list-none flex justify-center gap-4">
            <li className="p-2"><a href="/">Home</a></li>
            <li className="p-2"><a href="/dashboard">Dashboard</a></li>
            <li className="p-2"><a href="/about">About</a></li>
            <li className="p-2"><a href={login_link}>{login_text}</a></li>
          </ul>
        </header>
      </div>
    );
  };
  export default Header;
  