// import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import Container from "../Components/container";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to Next.js!</title>
      </Head>
      <Container>
        <h1>Welcome to Next.js!</h1>
        <span onClick={() => Router.push("/posts/one")}>One</span>
        <br />
        <span onClick={() => Router.push("/posts/two")}>Two</span>
        <br />
        <span onClick={() => Router.push("/posts/first")}>First Post</span>
        <br />
        <span onClick={() => Router.push("/api/user")}>USER</span>
        <br />
        <span onClick={() => Router.push("/api/hello")}>HELLO</span>
        <br />
        <span onClick={() => Router.push("/posts/env")}>ENV</span>
        <br />
        <span
          onClick={() =>
            Router.push("/?counter=1", undefined, { shallow: true })
          }
        >
          Reload
        </span>
        <br />
        <div>Next stars: {props.stars}</div>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}

export default HomePage;
