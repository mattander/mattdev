export default function TitleDivider({ className }) {
    const classes = className
        ? 'block border-t border-gray-400 -mx-1 ' + className
        : 'block border-t border-gray-400 -mx-1';
    return <span className={classes}></span>;
}
