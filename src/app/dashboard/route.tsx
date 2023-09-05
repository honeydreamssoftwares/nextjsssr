import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { NextApiRequest, NextApiResponse } from "next";
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server";


export  async function GET(req:NextRequest) {
  const session = await getServerSession(authOptions);

  //console.log("req session",req, session);
  if (session) {
    return NextResponse.json(session);
  }else{
    return NextResponse.json({});

  }
}

