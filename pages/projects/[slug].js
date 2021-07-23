import Container from '/components/layout/Container';
import Layout from '/components/layout/Layout';
import Head from 'next/head';
import { CMS_NAME } from '/lib/constants';
import { getPostBySlug, getTopLevelPages, getPostSlugs } from '/lib/api';

export default function SingleProject({ project, nav }) {
    return (
        <>
            <Layout title={project.title} nav={nav}>
                <Head>
                    <title>Mattdev - {project.title}</title>
                </Head>
                <Container>
                    <section>{project.content}</section>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getPostSlugs('project').map((path) => {
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
    const project = getPostBySlug(`${params.slug}.md`, 'project', [
        'content',
        'title',
        'description',
    ]);

    const nav = getTopLevelPages();

    return {
        props: {
            project,
            nav,
        },
    };
}
