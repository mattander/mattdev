import Layout from '/components/layout/Layout';
import Head from 'next/head';
import { getPostBySlug, getTopLevelPages, getPostSlugs } from '/lib/api';
import TitleDivider from '../../components/base/TitleDivider';

export default function SingleProject({ project, nav }) {
    return (
        <>
            <Layout title="Projects" nav={nav}>
                <Head>
                    <title>Mattdev - {project.title}</title>
                </Head>
                <section>
                    <div className="inline-block md:max-w-4/5 mt-2 mb-8">
                        <h1 className="font-serif text-4xl pb-3">
                            {project.title}
                        </h1>
                        <TitleDivider />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    ></div>
                </section>
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
