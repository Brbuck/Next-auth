import { useRouter } from "next/router";
import Header from "./Header";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  const showHeader2 = router.pathname === "/signup" ? false : true;
  return (
    <>
      {showHeader && showHeader2 && <Header />}
     
      <main>{children}</main>
    </>
  );
}
