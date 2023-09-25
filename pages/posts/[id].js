import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';
import Image from "next/image";

import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from "next/link";
import ComicPage from "../../components/comicPage";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

export default function Post({ postData }) {
    return (
        <Layout>
          <ComicPage comicPage={postData} />
            <div>
              <Link href={`/posts/${parseInt(postData) - 1}`}> Previous Page</Link>
              <Link href={`/posts/${parseInt(postData) + 1}`}> Next Page</Link>
            </div>
        </Layout>
    );
}

// style={{width: '100%', height: '100%'}