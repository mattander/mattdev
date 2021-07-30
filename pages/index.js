import Container from '../components/layout/Container';
import Layout from '../components/layout/Layout';
import { BlockList, BlockItem } from '../components/base';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '../lib/api';

export default function Index({ page, nav, posts, projects }) {
    return (
        <>
            <Layout title="Matt Anderson's development website" nav={nav}>
                <Head>
                    <title>Mattdev - Home</title>
                </Head>
                <Container>
                    <section
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    ></section>
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
                    <section>
                        <h2>Posts</h2>
                        <p>My latest blog posts</p>
                        <BlockList>
                            {posts.map(
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
    const page = getPostBySlug('home', 'page', ['content', 'title']);
    const projects = getAllPosts('project', ['description', 'title']);
    const posts = getAllPosts('post', ['description', 'title']);

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
