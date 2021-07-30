import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';
import TitleBlock from './TitleBlock';

export default function Layout({ children, title, nav }) {
    return (
        <>
            <Meta />
            <div className="layout pt-2 sm:pt-6 px-1.5 container mx-auto sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg min-h-screen">
                <Header className="sm:h-full px-5 sm:px-1.5">
                    <Nav nav={nav} className="sm:order-2 mb-3 sm:mb-0" />
                    <TitleBlock className="sm:order-1">{title}</TitleBlock>
                </Header>
                <main className="sm:h-full px-5 sm:px-1.5">{children}</main>
                <Footer className="mt-auto px-5 py-4 sm:px-0 sm:col-span-2" />
            </div>
        </>
    );
}
