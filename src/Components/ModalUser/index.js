import Link from "next/link";
import { signOut } from "next-auth/react";

import { Container, Wrapper } from "./styles";

function ModalMenu({togleShowModalUser}) {
  return (
    <Wrapper onClick={togleShowModalUser}>
      <Container>
        <Link href="#">
          <a>Your Projects</a>
        </Link>
        <Link href="#">
          <a>Settings</a>
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Sign out
        </button>
      </Container>
    </Wrapper>
  );
}

export default ModalMenu;
