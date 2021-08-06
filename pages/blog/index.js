import Layout from '/components/layout/Layout';
import { BlockList, BlockItem } from '/components/base';
import Head from 'next/head';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '/lib/api';
import PostList from '/components/PostList';

export default function Posts({ nav, posts, page }) {
    return (
        <>
            <Layout title="Posts" nav={nav}>
                <Head>
                    <title>Mattdev - Posts</title>
                </Head>
                {page ? (
                    <section
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    ></section>
                ) : null}
                <PostList posts={posts}>
                    <h2>Posts</h2>
                    <p>My latest blog posts</p>
                </PostList>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const pages = getAllPosts('page');
    const postPageExists =
        pages.filter(({ slug }) => slug === 'posts').length > 0;
    const page = postPageExists
        ? getPostBySlug('post', 'page', ['content', 'title'])
        : null;
    const posts = getAllPosts('post', ['description', 'title', 'date']);
    const nav = getTopLevelPages();

    return {
        props: {
            nav,
            page,
            posts,
        },
    };
}
