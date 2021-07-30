import Link from 'next/link';

export default function Nav({ nav, className }) {
	const navLinks = nav.map(({ name, page }) => (
		<li
			key={`nav-link-${name}`}
			className='mr-4 sm:mr-0 sm:mb-3 font-serif'
		>
			<Link
				href={page === 'index' ? '/' : '/' + page.replace('/index', '')}
			>
				{name}
			</Link>
			<span className='ml-1 border-gray-800 border-t border-r w-2 h-2 inline-block transform rotate-45'>
				{' '}
			</span>
		</li>
	));

	navLinks.push(
		<li className='mr-4 sm:mr-0 sm:mb-3 font-serif'>
			<Link href='/blog'>Blog</Link>
			<span className='ml-1 border-gray-800 border-t border-r w-2 h-2 inline-block transform rotate-45'>
				{' '}
			</span>
		</li>
	);

	navLinks.push(
		<li className='mr-4 sm:mr-0 sm:mb-3 font-serif'>
			<Link href='/projects'>Projects</Link>
			<span className='ml-1 border-gray-800 border-t border-r w-2 h-2 inline-block transform rotate-45'>
				{' '}
			</span>
		</li>
	);

	return (
		<nav className={className} role='list'>
			<ul className='list-unstyled flex sm:flex-col sm:flex-nowrap sm:mt-12'>
				{navLinks}
			</ul>
		</nav>
	);
}
