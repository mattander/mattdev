// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className="container mx-auto px-10 md:px-40 py-10">
            <h1 className="text-4xl">Welcome to mattdev.ca</h1>
            <small className="text-lg mt-2 block mb-4">
                It's a bit sparse, but it's a quick read.
            </small>

            <section className="md:w-4/5">
                <h2 className="text-2xl mb-2">What have I done lately?</h2>
                <hr className="my-4" />
                <h3 className="text-xl mb-2">
                    I made a silly{' '}
                    <a
                        href="https://mattander.github.io/words/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        webapp where you can list words
                    </a>
                    . I wrote this in vue becuase I wanted to take the new
                    <span className="font-mono text-sm">
                        &lang;script setup&rang;
                    </span>{' '}
                    for a spin. It was fun. I might add more sometime. Here's
                    the{' '}
                    <a
                        href="https://github.com/mattander/words"
                        target="_blank"
                        rel="noreferrer"
                    >
                        repo on github
                    </a>
                    .
                </h3>
            </section>
        </div>
    );
}
