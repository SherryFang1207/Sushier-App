import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function SessionTester() {
  const data = await getServerSession(authOptions);
  return <p>{JSON.stringify(data)}</p>;
}
