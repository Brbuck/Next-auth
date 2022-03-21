import { useRouter } from "next/router";
import Header from "./Header";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
}
