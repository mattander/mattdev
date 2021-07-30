import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function Layout({ children, title, nav }) {
    return (
        <>
            <Meta />
            <div className="layout pt-2 sm:pt-6 sm:h-screen container mx-auto sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
                <Header
                    className="sm:h-full px-5 sm:px-0"
                    title={title}
                    nav={nav}
                />
                <main className="sm:h-full sm:overflow-y-scroll">
                    {children}
                </main>
                <Footer className="mt-auto px-5 py-4 sm:px-0 sm:col-span-2" />
            </div>
        </>
    );
}
