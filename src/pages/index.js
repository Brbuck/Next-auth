
import Head from "next/head";
import {getSession,  signIn, } from "next-auth/react";

export async function getServerSideProps({req}) {
  const session = await getSession({req});

  if(session){
    return{
      redirect:{
        destination: '/app',
        permanent: false
      }
    }
  }
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default function Home() {
 

  function handleSignInGoogle() {
    signIn("google");
  }
  function handleSignInLinkedin() {
    signIn("linkedin");
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sign In</h1>
      <button onClick={handleSignInGoogle}>Sign in with Google</button>
      <button onClick={handleSignInLinkedin}>Sign in with Linkeding</button>
     
    </div>
  );
}
