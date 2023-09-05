import { getServerSession } from "next-auth/next"

import { authOptions } from "../../app/api/auth/[...nextauth]/route";
export default async function  Header() {
  const session = await getServerSession(authOptions)


const login_text=(session)?"Logout":"Login";
const login_link=(session)?"/api/auth/signout":"/api/auth/signin";
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
  