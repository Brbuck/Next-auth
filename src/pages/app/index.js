import { getSession, signOut, useSession } from "next-auth/react";

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
      <img src={data?.user.image} />
      <button
        onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
      >
        Sign out
      </button>
    </div>
  );
}

export default test;
