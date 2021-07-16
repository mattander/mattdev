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

console.log('test');
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

export function getPostBySlug(slug, postType = 'post', fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(getPostTypeDirectory(postType), `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(postType = 'post', fields = []) {
	const slugs = getPostSlugs(postType);
	const posts = slugs
		.map((slug) => getPostBySlug(slug, postType, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
