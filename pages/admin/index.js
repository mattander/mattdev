import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <script
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                    async
                ></script>

                <link
                    href="/config.yml"
                    type="text/yaml"
                    rel="cms-config-url"
                />
            </Head>

            <script
                src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
                async
            ></script>
        </>
    );
}
