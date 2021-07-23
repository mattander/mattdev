import Container from '../components/layout/Container';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getAllPosts, getPageBySlug, getTopLevelPages } from '../lib/api';

export default function Index({ page, nav, posts, projects }) {
    return (
        <>
            <Layout title="Matt Anderson's development website" nav={nav}>
                <Head>
                    <title>Mattdev - Home</title>
                </Head>
                <Container>
                    <section>{page.content}</section>
                    <section>
                        <h2>Projects</h2>
                        <p>Here's what I've been working on lately</p>
                    </section>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const page = getPageBySlug('home', 'page', ['content', 'title']);
    const projects = getAllPosts('project');
    const posts = getAllPosts('post');

    const nav = getTopLevelPages();

    return {
        props: {
            page,
            nav,
            projects,
            posts,
        },
    };
}
