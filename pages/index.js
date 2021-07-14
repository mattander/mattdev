import Layout from '../components/base/Layout';
import { attributes } from '../content/settings.md';

export default function Home({ title, description, ...props }) {
    return (
        <Layout pageTitle={title}>
            <h1 className="title">Welcome to my blog!</h1>
            <div>homepage is</div>

            <main>Posts go here!</main>
        </Layout>
    );
}

export const getStaticProps = async (context) => {
    // your logic
    const siteSettings = await import('../content/settings.md');

    return {
        props: { siteSettings },
    };
};
