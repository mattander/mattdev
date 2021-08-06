import Layout from '/components/layout/Layout';
import Head from 'next/head';
import { getPostBySlug, getTopLevelPages, getPostSlugs } from '/lib/api';
import TitleDivider from '../../components/base/TitleDivider';
import dayjs from 'dayjs';

export default function SinglePost({ post, nav }) {
    return (
        <>
            <Layout title={'Blog'} nav={nav}>
                <Head>
                    <title>Mattdev - {post.title}</title>
                </Head>
                <section>
                    <div className="inline-block md:max-w-4/5 mt-2 mb-8">
                        <h1 className="font-serif text-4xl pb-3">
                            {post.title}
                        </h1>
                        <TitleDivider />
                        <div className="mt-2">
                            Published {dayjs(post.date).format('MMMM DD, YYYY')}
                        </div>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </section>
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
    const post = getPostBySlug(`${params.slug}.md`, 'blog', [
        'content',
        'title',
        'description',
        'date',
    ]);

    const nav = getTopLevelPages();

    return {
        props: {
            post,
            nav,
        },
    };
}
