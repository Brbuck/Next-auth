import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getSession, signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import {
  Container,
  EnterYourAccount,
  EditInput,
  EmailButton,
  GoogleButton,
  Frame,
  LinkedinButton,
  Sign,
  SignInButton,
  SigninWithEmailAndPassword,
} from "../styles/pages/index";


import GoogleImage from "../assets/google-logo.png";
import LinkedinImage from "../assets/linkedin-logo.png";
import EmailImage from "../assets/email-logo.png";
import Logo from "../assets/auth.png";

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const Login = async (data) => {
    try {
      await console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [stateSign, setStateSign] = useState(false);

  function togleSignIn() {
    setStateSign(true);
  }
  function handleSignInGoogle() {
    signIn("google");
  }
  function handleSignInLinkedin() {
    signIn("linkedin");
  }
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sign onSubmit={handleSubmit(Login)}>
        <h1>Welcome!</h1>
        <span>Sign in with your account to access our platform</span>
        <SigninWithEmailAndPassword stateSign={stateSign}>
          <div>
            <label className={errors.email ? "label-erro" : null}>E-mail</label>
            <EditInput
              className={errors.email ? "erros" : null}
              type="email"
              {...register("email", { required: true })}
              placeholder="email@email.com"
            />
            <p>{errors.email && "Email is required"}</p>
          </div>
          <div>
            <label className={errors.password ? "label-erro" : null}>Password</label>
            <EditInput
              className={errors.password ? "erros" : null}
              type="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password here"
            />
            <p>{errors.password && "Password is required"}</p>
          </div>
          <Link href="#">
            <a>Forgot password?</a>
          </Link>
          <SignInButton type="submit">Acess account</SignInButton>
          <p>Or</p>
        </SigninWithEmailAndPassword>
        <GoogleButton onClick={handleSignInGoogle} stateSign={stateSign}>
          <Image src={GoogleImage} alt="Google Logo" width={18} height={16} />
          <p>Sign in with Google</p>
        </GoogleButton>
        <LinkedinButton onClick={handleSignInLinkedin} stateSign={stateSign}>
          <Image src={LinkedinImage} alt="Google Logo" width={18} height={16} />
          <p>Sign in with Linkeding</p>
        </LinkedinButton>
        <EmailButton onClick={togleSignIn} stateSign={stateSign}>
          <Image src={EmailImage} alt="Google Logo" width={18} height={16} />
          <p>Sign in with email and password</p>
        </EmailButton>
        <EnterYourAccount>
          Don’t have an account yet?
          <Link href="/signup">
            <a>Create account</a>
          </Link>
        </EnterYourAccount>
        <div>
          <p>Powered by</p>
          <Image src={Logo} alt="Google Logo" width={30} height={30} />
          <p>Auth</p>
        </div>
      </Sign>
      <Frame />
    </Container>
  );
}
