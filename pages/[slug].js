import Container from '../components/layout/Container';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getPostBySlug, getTopLevelPages } from '../lib/api';

export default function Index({ page, nav }) {
	return (
		<>
			<Layout title={page.title} nav={nav}>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>Test</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ params }) {
	const page = getPostBySlug(params.slug, 'page', ['content', 'title']);
	const nav = getTopLevelPages();

	return {
		props: {
			page,
		},
	};
}
