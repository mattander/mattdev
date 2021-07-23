import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import {
    POSTS_DIRECTORY,
    PAGES_DIRECTORY,
    PROJECTS_DIRECTORY,
} from './constants';

// I grabbed all this from the next.js sample repo
// using it to help me understand how this stuff works

function getPostTypeDirectory(type = 'post') {
    let dir = '';
    switch (type) {
        case 'page':
            dir = PAGES_DIRECTORY;
            break;

        case 'project':
            dir = PROJECTS_DIRECTORY;
            break;

        default:
            dir = POSTS_DIRECTORY;
    }

    return join(process.cwd(), dir);
}

export function getPostSlugs(postType = 'post') {
    return fs.readdirSync(getPostTypeDirectory(postType));
}

export function getTopLevelPages() {
    const fullPath = join(process.cwd(), 'content/settings.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data.menu;
}

export function getPostBySlug(slug, postType = 'post', fields = []) {
    if (postType === 'page') {
        slug =
            slug === 'home' || slug === 'index.md'
                ? ''
                : slug.replace(/\.md$/, '');
        slug = slug + '/index.md';
    }

    const fullPath = join(getPostTypeDirectory(postType), slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const item = {
        slug: slug.replace(/(\/\S*)?.md$/gi, ''),
        postType,
    };

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            item[field] = realSlug;
        }

        if (field === 'content') {
            item[field] = content;
        }

        if (data[field]) {
            item[field] = data[field];
        }
    });

    return item;
}

export function getAllPosts(postType = 'post', fields = []) {
    const slugs = getPostSlugs(postType);

    const posts = slugs
        .map((slug) => getPostBySlug(slug, postType, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}
