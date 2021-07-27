import Container from '/components/layout/Container';
import Layout from '/components/layout/Layout';
import { BlockList, BlockItem } from '/components/base';
import Head from 'next/head';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '/lib/api';

export default function Projects({ nav, projects, page }) {
    return (
        <>
            <Layout title="Projects" nav={nav}>
                <Head>
                    <title>Mattdev - Projects</title>
                </Head>
                <Container>
                    {page ? <section>{page.content}</section> : null}
                    <section>
                        <h2>Projects</h2>
                        <p>Here's what I've been working on lately</p>
                        <BlockList>
                            {projects.map(
                                ({ description, title, slug, postType }) => (
                                    <BlockItem
                                        key={slug}
                                        title={title}
                                        link={`${postType}s/${slug}`}
                                        content={description}
                                    />
                                )
                            )}
                        </BlockList>
                    </section>
                </Container>
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
    const projects = getAllPosts('project', ['description', 'title']);
    const nav = getTopLevelPages();

    return {
        props: {
            nav,
            page,
            projects,
        },
    };
}
