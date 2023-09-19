"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data } = useSession();
  return <p>{data}</p>;
  //   if (data) {
  //     return (
  //       <>
  //         Signed in as {data.user.email} <br />
  //         <button onClick={() => signOut()}>Sign out</button>
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       Not signed in <br />
  //       <button onClick={() => signIn()}>Sign in</button>
  //     </>
  //   );
}
