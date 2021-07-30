import Link from 'next/link';

export default function Header({ className, children }) {
    return (
        <header className={`sm:flex sm:flex-col sm:flex-nowrap ${className}`}>
            {children}
        </header>
    );
}
