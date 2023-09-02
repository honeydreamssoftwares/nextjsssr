import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
export default  async (req:any, res:any) =>{
  console.log("Request",req);
  console.log("Response",res);
  //const session = await getServerSession(req, res,authOptions)
  return (
 <>Dashboard</>
  )
}
