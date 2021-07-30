import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { getPostBySlug, getTopLevelPages, getPostSlugs } from '../lib/api';

export default function Index({ page, nav }) {
    return (
        <>
            <Layout title={page.title} nav={nav}>
                <Head>
                    <title>Mattdev - {page.title}</title>
                </Head>
                <section
                    className="sm:mt-4 content-container"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                ></section>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const blacklist = ['projects', 'posts'];

    const paths = getPostSlugs('page')
        .filter(
            (path) => !/.*\.md/.test(path) && blacklist.indexOf(path) === -1
        )
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
    const page = getPostBySlug(params.slug, 'page', ['content', 'title']);
    const nav = getTopLevelPages();

    return {
        props: {
            page,
            nav,
        },
    };
}
