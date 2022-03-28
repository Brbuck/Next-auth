import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

import { Container } from "../../styles/pages/app";

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
    <Container>
      <p>Dashboard</p>

      <Link href="/app/test">
        <a>Home</a>
      </Link>
    </Container>
  );
}

export default test;
