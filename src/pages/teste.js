import { signOut, useSession } from "next-auth/react";
function test() {
    const { data } = useSession()
  return (
    <div>
      <p>Dashboard</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign out</button>
    </div>
  );
}

export default test;
