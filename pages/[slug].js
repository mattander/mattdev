import Container from '../components/layout/Container';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getPageBySlug, getTopLevelPages, getPostSlugs } from '../lib/api';

export default function Index({ page, nav }) {
    return (
        <>
            <Layout title={page.title} nav={nav}>
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>
                <Container>
                    <section>{page.content}</section>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getPostSlugs('page')
        .filter((path) => !/.*\.md/.test(path))
        .map((path) => {
            return {
                params: {
                    slug: path,
                },
            };
        });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const page = getPageBySlug(params.slug, 'page', ['content', 'title']);
    const nav = getTopLevelPages();

    return {
        props: {
            page,
            nav,
        },
    };
}
