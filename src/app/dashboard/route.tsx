import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next";
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server";


export  async function GET(req:NextRequest) {
  const session = await getToken({ req })



  console.log("session", session);
  if (session) {
    return NextResponse.json(session);
  }
}

