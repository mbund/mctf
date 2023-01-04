import { children } from "solid-js";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props: any) {
  const c = children(() => props.children);
  return (
    <>
      <Navbar />
      <main>{c()}</main>
      <Footer />
    </>
  );
}
