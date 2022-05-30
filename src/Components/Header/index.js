import React, { useState } from "react";
import { Container, Navigation, Logo } from "./styles";
import Image from "next/image";

import { useSession } from "next-auth/react";

import Icon from "../../assets/logo.png";
import ModalUser from "../ModalUser";

function Header() {
  const { data } = useSession();

  const [showModalUser, setShowModalUser] = useState(false);
  const togleShowModalUser = () => {
    setShowModalUser(!showModalUser);
  };

  return (
    <>
      <Container>
        <Logo>
          <Image src={Icon} alt="Google Logo" width={35} height={30} />
        </Logo>
        <Navigation>
          <li>Welcome back {data?.user?.name.split(" ", 1)}</li>
          <li>
            <img
              onClick={togleShowModalUser}
              src={data?.user?.image}
              alt="avatar"
              width="32px"
            />
          </li>
        </Navigation>
      </Container>
      {showModalUser && <ModalUser togleShowModalUser={togleShowModalUser} />}
    </>
  );
}

export default Header;
