import Layout from '/components/layout/Layout';
import { BlockList, BlockItem } from '/components/base';
import Head from 'next/head';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '/lib/api';
import PostList from '/components/PostList';

export default function Projects({ nav, projects, page }) {
    return (
        <>
            <Layout title="Projects" nav={nav}>
                <Head>
                    <title>Mattdev - Projects</title>
                </Head>

                {page ? (
                    <section
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    ></section>
                ) : null}
                <PostList posts={projects} postType="project">
                    <h2>Projects</h2>
                    <p>Here's what I've been working on lately</p>
                </PostList>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const pages = getAllPosts('page');
    const projectPageExists =
        pages.filter(({ slug }) => slug === 'projects').length > 0;
    const page = projectPageExists
        ? getPostBySlug('projects', 'page', ['content', 'title'])
        : null;
    const projects = getAllPosts('project', ['description', 'title', 'date']);
    const nav = getTopLevelPages();

    return {
        props: {
            nav,
            page,
            projects,
        },
    };
}
