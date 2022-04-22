import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Posts() {
  return (
    <>
      <Head>
        <title>ig.news | Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <a>
              <time>12h</time>
              <strong>Lorem Ipsum</strong>
              <p>
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
                Lorem ipsum silor doler amet bla bla bla bla
              </p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}