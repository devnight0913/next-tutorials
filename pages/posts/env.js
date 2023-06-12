import Head from "next/head";
import Container from "../../Components/container";
import Link from 'next/link';

export default function FirstPost(props) {
  return (
    <>
      <Container>
        <Head>
          <title>Environment Variables</title>
        </Head>
        <h1>Database Credentials</h1>
        <p>Host : {props.host}</p>
        <p>Username : {props.username}</p>
        <p>Password : {props.password}</p>
        <h2>
          <Link href="/">Home</Link>
        </h2>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  };
}
