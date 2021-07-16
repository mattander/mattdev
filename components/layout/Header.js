import Link from 'next/link';
import Container from './Container';

export default function Header({ title, nav }) {
	const navLinks = nav.map(({ name, page }) => (
		<li key={`nav-link-${name}`} className='mr-4'>
			<Link
				href={page === 'index' ? '/' : '/' + page.replace('/index', '')}
			>
				{name}
			</Link>
		</li>
	));
	return (
		<Container>
			<header>
				<nav>
					<ul className='flex'>{navLinks}</ul>
				</nav>
				<h1>{title}</h1>
			</header>
		</Container>
	);
}
