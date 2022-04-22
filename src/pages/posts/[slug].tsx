import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './post.module.scss';

interface PostProps {
  post: {
	slug: string;
	title: string;
	content: string;
	updatedAt: string;
  }
}

export default function Post() {
	return (
		<>
		  <Head>
		  	<title>Hello wolrd | Ignews</title>
		  </Head>

		  <main className={styles.container}>
		  	<article className={styles.post}>
		  		<h1>Hello wolrd!</h1>
		  		<time>12h</time>
		  		<p>Conteúdo do post!</p>
		  	</article>
		  </main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
	return {
		props: {},
	}
}