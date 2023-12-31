import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Script from "next/script";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "The Growing Mind",
}: Props) {
  // console.log("user At public--", user);
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <title>The Growing Mind</title>
        {/* <meta
          name="description"
          content="Growing Mind, is dedicated to empower children with Autism Spectrum Disorders and other behavioral and developmental disorder. !"
        />
        <meta
          property="og:image"
          content="https://growingminddev.vercel.app/logo.png"
        /> */}
      </Head>
      <main className=" w-full relative ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
