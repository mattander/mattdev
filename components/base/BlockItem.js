import Link from 'next/link';

export default function BlockItem({ title, link, content, image, children }) {
    return (
        <li className="mb-3">
            <Link href={`/${link}`}>{title}</Link>
            <div>{content}</div>
        </li>
    );
}
