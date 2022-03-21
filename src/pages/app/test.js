import { getSession } from "next-auth/react";

function Test() {
  return <div>Hello world!</div>;
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
