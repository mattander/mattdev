import { BlockList, BlockItem } from './base';
import dayjs from 'dayjs';
export default function PostList({ posts, children, postType }) {
    const dir = postType === 'project' ? 'projects' : 'blog';
    return (
        <section>
            {children}
            <BlockList>
                {posts
                    .sort((a, b) => new Date(a.date) > new Date(b.date))
                    .map(({ description, title, slug, postType, date }) => (
                        <BlockItem
                            key={slug}
                            title={title}
                            link={`${dir}/${slug}`}
                            content={
                                <div>
                                    {dayjs(date).format('MMMM DD, YYYY')} -{' '}
                                    {description}
                                </div>
                            }
                            postType={postType}
                            date={date}
                        />
                    ))}
            </BlockList>
        </section>
    );
}
