import { BlockList, BlockItem } from './base';
import dayjs from 'dayjs';
export default function PostList({ posts, postType, content }) {
    const dir = postType === 'project' ? 'projects' : 'blog';
    return (
        <section>
            {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            ) : null}
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
