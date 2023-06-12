import Link from "next/link";
import Head from "next/head";
import Container from "../../Components/container";

function FirstPage(props) {
  return (
    <>
      <Container>
        <Head>
          <title>My First Post</title>
        </Head>
        <h1>First Page</h1>
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <div>Next stars: {props.stars}</div>
        <img src="/aa.jfif" alt="AAAAAAA" />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}

export default FirstPage;
