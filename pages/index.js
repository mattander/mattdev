import Container from '../components/layout/Container';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { useRouter } from 'next/dist/client/router';

export default function Index() {
	const router = useRouter();
	console.log({ path: router.pathname });

	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>Test</Container>
			</Layout>
		</>
	);
}

// export async function getStaticProps() {
// 	const allPosts = getAllPosts([
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'coverImage',
// 		'excerpt',
// 	]);

// 	return {
// 		props: { allPosts },
// 	};
// }
