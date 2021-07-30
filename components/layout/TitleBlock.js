import TitleDivider from '../base/TitleDivider';

export default function TitleBlock({ children, className, posttype }) {
    const headingClasses = 'text-2xl sm:text-3xl inline-block mb-1';
    return (
        <div className={className}>
            <div className="inline-block">
                {posttype === 'page' ? (
                    <h1 className={headingClasses}>{children}</h1>
                ) : (
                    <div className={headingClasses}>{children}</div>
                )}
                <TitleDivider className="hidden sm:block" />
                <small className="inline-block font-serif italic text-lg sm:text-xl sm:mt-1 mt-0 ml-2 sm:ml-0">
                    mattdev.ca
                </small>
            </div>
        </div>
    );
}
