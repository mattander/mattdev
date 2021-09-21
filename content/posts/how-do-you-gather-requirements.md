---
title: How do you gather requirements?
description: I talk about the challenges of requirements gathering during new dev work.
date: 2021-09-08T15:08:41.926Z
---
We're working on a new microsite right now and that almost always means new components and always means new templates. When you add new things to a codebase, it's time to gather requirements to so you can build them as salably and simply as possible. That leaves the question, how do you gather requirements?

Requirements gathering is an art, not a science. I don't think there's any one process that will work and what it really comes down to is the relationship between your UX designers and your developers. If the relationship is strong, they'll figure things out, if it's strained there can be more problems.

Every project has parts that are easy and parts that are hard. That's part of the job. The critical work is identifying the hard parts early because sometimes they are disguised. I've often come across an innocuous-looking template that I figured would be a simple, static page and later found out it was actually dynamic content. So how do you avoid this?

## Ask questions

Asking questions is vital. What is this? How does it work? Is this just like *x* from site *y*? No? It looks like it, what's different? Oh it's the same as *z*? Should *z* change to match this new design? Why? Why not?

All of these are questions I've asked while requirements gathering. When I build, I think about users and I know that users like to see familiar interactive components. If a button is different on every page of your website, users won't know what's a button and what isn't. I look for common components that I can reuse. I also look for patterns that will break an existing component, and then that happens, I ask why. 

## Plan ahead

I've been buying a lot of books lately for my soon-to-be-born daughter and I came across an old favourite of mine "If You Give A Mouse A Cookie." Well, if you give a developer a new component, they'll want some specs to go with it. Then they'll want states. Then they'll want to know what this component might do in the future. 

When you build stuff that's part of a big ecosystem, you have to think salably. If someone asks me to add something to this next month, how hard will it be? Can I make that easier? Does making that easier now take too much time? It's a catch 22. Build things as scalable as you can without destroying the project timeline. 

One trick that I've learned is to keep things like field names and db keys as generic as possible and consistent across different components. That way, if I migrate or refactor, it should be easy to remap back end data. 

## Check in

Lastly, I try to find time to check in with the designers. They work on a lot of products and can't always remember everything they've made. If I see something that looks similar to another component, I check in to say "hey, isn't this just like this?" It's never a waste of time. Sometimes they realize it is and unify the two, other times you learn their though process and it often informs the dev work.



\------

These are just a few things I think about when I'm looking at designs and translating them into code.