import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";

import GoogleImage from "../assets/google-logo.png";
import LinkedinImage from "../assets/linkedin-logo.png";

import {
  Container,
  EditInput,
  GoogleButton,
  Frame,
  LinkedinButton,
  Sign,
  SignInButton,
} from "../styles/pages/index";

import { CreateAccount } from "../styles/pages/signup";

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

export default function signUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      await console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSignInGoogle() {
    signIn("google");
  }
  function handleSignInLinkedin() {
    signIn("linkedin");
  }

  return (
    <Container>
      <Sign>
        <h1>The first step to apply</h1>
        <span>Create your account</span>
        <CreateAccount onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label className={errors.name ? "label-erro" : null}>Name *</label>
            <EditInput
              className={errors.name ? "erros" : null}
              type="text"
              {...register("name", { required: true })}
              placeholder="First name"
            />
            <p>{errors.name && "Name is required"}</p>
          </div>
          <div>
            <label className={errors.lastname ? "label-erro" : null}>
              Lastname *
            </label>
            <EditInput
              className={errors.lastname ? "erros" : null}
              type="text"
              {...register("lastname", { required: true })}
              placeholder="Lastname"
            />
            <p>{errors.lastname && "Lastname is required"}</p>
          </div>
          <div>
            <label className={errors.email ? "label-erro" : null}>
              E-mail *
            </label>
            <EditInput
              className={errors.email ? "erros" : null}
              type="email"
              {...register("email", { required: true })}
              placeholder="email@email.com"
            />
            {errors.email ? (
              <p>{errors.email && "Email is required"}</p>
            ) : (
              <p className="message-email">
                Tip: Register your best e-mail. We will send you a confirmation
                link.
              </p>
            )}
          </div>
          <div>
            <label className={errors.confimeEmail ? "label-erro" : null}>
              Confirm your e-mail address *
            </label>
            <EditInput
              className={errors.confimeEmail ? "erros" : null}
              type="email"
              {...register("confimeEmail", { required: true })}
              placeholder="email@email.com"
            />
            <p>
              {errors.confimeEmail && "Confirm your e-mail address is required"}
            </p>
          </div>
          <div>
            <label className={errors.password ? "label-erro" : null}>
              Password *
            </label>
            <EditInput
              className={errors.password ? "erros" : null}
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <p>{errors.password && "Password is required"}</p>
          </div>
          <SignInButton type="submit">Sign Up</SignInButton>
          <p style={{ textAlign: "center" }}>Or</p>
        </CreateAccount>
        <GoogleButton onClick={handleSignInGoogle} stateSign={true}>
          <Image src={GoogleImage} alt="Google Logo" width={18} height={16} />
          <p>Sign in with Google</p>
        </GoogleButton>
        <LinkedinButton onClick={handleSignInLinkedin} stateSign={true}>
          <Image src={LinkedinImage} alt="Google Logo" width={18} height={16} />
          <p>Sign in with Linkeding</p>
        </LinkedinButton>
        <span>
          Already have an account?{" "}
          <Link href="/">
            <a>Sign in with email and password</a>
          </Link>
        </span>
      </Sign>
      <Frame />
    </Container>
  );
}
