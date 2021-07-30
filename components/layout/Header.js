import Link from 'next/link';
import Container from './Container';

export default function Header({ title, nav, className }) {
    const navLinks = nav.map(({ name, page }) => (
        <li
            key={`nav-link-${name}`}
            className="mr-4 sm:mr-0 sm:mb-3 font-serif"
        >
            <Link
                href={page === 'index' ? '/' : '/' + page.replace('/index', '')}
            >
                {name}
            </Link>
            <span className="ml-1 border-gray-800 border-t border-r w-2 h-2 inline-block transform rotate-45">
                {' '}
            </span>
        </li>
    ));
    return (
        <header className={`sm:flex sm:flex-col sm:flex-nowrap ${className}`}>
            <nav className="sm:order-2">
                <ul className="flex sm:flex-col sm:flex-nowrap sm:mt-12">
                    {navLinks}
                </ul>
            </nav>
            <div className="inline-block sm:order-1">
                <h1 className="text-3xl inline-block">{title} </h1>
                <span className="block border-t border-gray-400"></span>
                <small className="inline-block font-serif italic text-xl">
                    mattdev.ca
                </small>
            </div>
        </header>
    );
}
