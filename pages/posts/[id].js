import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';
import Image from "next/image";

import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from "next/link";

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
  const imgSrc = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/comic-pages/${postData}.jpg`
    return (
        <Layout>
          <Image
              priority
              src = {imgSrc}
              //className={utilStyles.borderCircle}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
            />

            <div>
              <Link href={`/posts/${parseInt(postData) - 1}`}> Previous Page</Link>
              <Link href={`/posts/${parseInt(postData) + 1}`}> Next Page</Link>
            </div>
        </Layout>
    );
}

// style={{width: '100%', height: '100%'}