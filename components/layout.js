import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './dropdown';

const name = 'Cry Havoc';
export const siteTitle = 'Cry Havoc Comic';

export default function Layout({ children, home }) {

  const imgSrc = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/logoresized.png`
    
  return (
    <>
    <div className={styles.header}>
      <DropdownMenu menuName={"About"} items={[{text: "About Havoc", link: "/about/havoc"},
        {text: "The People", link: "/about/people"}]}/>

      <DropdownMenu menuName={"Webcomic"} items={[{text: "Start Here", link: "/posts/1"},
        {text: "Latest Page", link: "/posts/2"}, {text: "Archive", link: "archive"}]}/>

      <a href="https://twitter.com/_CryHavoc/">
        <Image
          priority
          src = {`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/twitter.png`}
          height={20}
          width={20}
          style={{ width: 'auto', height: 'auto' }}
        />
      </a>

    </div>
    <div className={styles.container}>
        <Head> 
        </Head>
         <Image
            src = {imgSrc}
            //className={utilStyles.borderCircle}
            height={258}
            width={745}
            fill={false}
            className={styles.logo}
        />
        <main>{children}</main>
    </div>
    </>
  );
}