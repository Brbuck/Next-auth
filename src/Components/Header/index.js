import React from "react";
import { Container, Navigation, Logo } from "./styles";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

import Icon from "../../assets/logo.png";

function Header() {
    const { data } = useSession();
  return (
    <Container>
      <Logo>
        <Image src={Icon} alt="Google Logo" width={35} height={30} />
      </Logo>
      <Navigation>
        <li>Welcome back {data?.user?.name}</li>
        <li>
          <img src={data?.user?.image} alt="avatar" width="30px" />
        </li>
        <li>
          <button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
          >
            Sign out
          </button>
        </li>
      </Navigation>
    </Container>
  );
}

export default Header;
