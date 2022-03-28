import { getSession } from "next-auth/react";

import { Container } from "../../styles/pages/app";

function Test() {
  return <Container>Hello world!</Container>;
}

export default Test;

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
