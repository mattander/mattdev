import Container from '/components/layout/Container';
import Layout from '/components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '/lib/constants';
import { getPostBySlug, getTopLevelPages, getPostSlugs } from '/lib/api';

export default function SinglePost({ post, nav }) {
    return (
        <>
            <Layout title={post.title} nav={nav}>
                <Head>
                    <title>Mattdev - {post.title}</title>
                </Head>
                <Container>
                    dangerouslySetInnerHTML={{ __html: post.content }}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getPostSlugs('post').map((path) => {
        return {
            params: {
                slug: path.replace('.md', ''),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(`${params.slug}.md`, 'post', [
        'content',
        'title',
        'description',
    ]);

    const nav = getTopLevelPages();

    return {
        props: {
            post,
            nav,
        },
    };
}
