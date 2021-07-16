import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function Layout({ children, title, nav }) {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<Header title={title} nav={nav} />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
