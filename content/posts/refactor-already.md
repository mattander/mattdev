---
title: Refactor? Already?
description: Refactor may be to strong a word here. I talk about some file
  restructuing to reduce redundant templates.
date: 2021-08-11T13:56:05.024Z
---
This isn't a **true** refactor. I just got tired of having the post and project listing page templates being SO similar.

From the first alpha I published that had project and post listings, I've known that their templates were too similar. Very repetitive code that made global changes annoying. If I changed how one component worked, I had to change the props in three or four places, depending on the component: root index.js, projects index.js, blog index.js, and \[slug].js.

This was annoying, so today I fixed it. Now, pages have a field to mark them as a post listing page, and a drop down to choose the post that they list. Handy! The \[slug].js page handles the logic so that if it's a post listings page it fetches the posts and passes them to the post list component.

What's next? I'd like to find a way to make one file for the single post template. Projects and blog posts have slightly different detail templates, but what I can do is have a single root template and then include a component for the main content depending on the post type.

Feels like I'm rebuilding WordPress....but less PHP (phew).

This was an incremental update, but I'm happy with it. The goal is to keep the components and templates as generic as possible and lean on the CMS to decide on the structure and content of the site.