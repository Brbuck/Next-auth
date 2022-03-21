import { getSession, useSession } from "next-auth/react";
import Link from "next/link";


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
function test() {
  const { data } = useSession();
  return (
    <div>
      <p>Dashboard</p>
      <p>{JSON.stringify(data)}</p>

      <Link href="/app/test">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default test;
