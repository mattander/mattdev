import Layout from '../components/layout/Layout';
import { BlockList, BlockItem } from '../components/base';
import Head from 'next/head';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '../lib/api';
import TitleDivider from '../components/base/TitleDivider';

export default function Index({ page, nav, posts, projects }) {
    return (
        <>
            <Layout title="Home" nav={nav}>
                <Head>
                    <title>Mattdev - Home</title>
                </Head>

                <section>
                    <div className="inline-block md:max-w-4/5 mt-2 mb-8">
                        <h2 className="font-serif text-4xl pb-3">
                            Welcome to my website
                        </h2>
                        <TitleDivider />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    ></div>
                </section>

                <section>
                    <h2>Projects</h2>
                    <p>Here's what I've been working on lately</p>
                    <BlockList>
                        {projects.map(
                            ({ description, title, slug, postType }) => (
                                <BlockItem
                                    key={slug}
                                    title={title}
                                    link={`projects/${slug}`}
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
                        {posts.map(({ description, title, slug, postType }) => (
                            <BlockItem
                                key={slug}
                                title={title}
                                link={`blog/${slug}`}
                                content={description}
                            />
                        ))}
                    </BlockList>
                </section>
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
