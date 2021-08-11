import Layout from '/components/layout/Layout';
import Head from 'next/head';
import PostList from '/components/PostList';
import {
    getPostBySlug,
    getTopLevelPages,
    getPostSlugs,
    getAllPosts,
} from '../lib/api';

export default function Index({ page, nav, posts }) {
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
                {page.listing_page ? (
                    <PostList posts={posts} postType={page.list_post_type}>
                        {page.listing_content ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: page.listing_content,
                                }}
                            ></div>
                        ) : null}
                    </PostList>
                ) : null}
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getPostSlugs('page')
        .filter((path) => !/.*\.md/.test(path))
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
    const props = {
        slug: params.slug,
        posts: null,
    };

    props.page = getPostBySlug(params.slug, 'page', [
        'content',
        'title',
        'listing_page',
        'list_post_type',
        'listing_content',
    ]);

    if (props.page.listing_page) {
        props.posts = getAllPosts(props.page.list_post_type, [
            'description',
            'title',
            'date',
        ]);
        props.listPostType;
    } else {
        delete props.page.listing_page;
        delete props.page.listing_content;
        delete props.page.list_post_type;
    }

    props.nav = getTopLevelPages();

    return {
        props,
    };
}
