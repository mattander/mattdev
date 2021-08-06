import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { getAllPosts, getPostBySlug, getTopLevelPages } from '../lib/api';
import TitleDivider from '../components/base/TitleDivider';
import PostList from '../components/PostList';

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
                <PostList posts={projects} postType="project">
                    <h2>Projects</h2>
                    <p>Here's what I've been working on lately</p>
                </PostList>

                <PostList posts={posts}>
                    <h2>Posts</h2>
                    <p>My latest blog posts</p>
                </PostList>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const page = getPostBySlug('home', 'page', ['content', 'title']);
    const projects = getAllPosts('project', ['description', 'title', 'date']);
    const posts = getAllPosts('post', ['description', 'title', 'date']);

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
