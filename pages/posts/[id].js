import Link from "next/link";
import Head from "next/head";
import Container from "../../Components/container";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Container>
      {postData.id}
      <br />
      {postData.title}
      <br />
      {postData.date}
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </Container>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
