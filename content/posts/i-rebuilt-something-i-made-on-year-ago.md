---
title: I rebuilt something I made on year ago
description: What I learned from refactoring an app I made at work last year.
date: 2021-08-25T14:24:26.657Z
---
Last year, around this time, I made the[ events calendar app](https://www.mississauga.ca/events-and-attractions/events-calendar/) at work. Following our standards, it uses Vue (2.x) and the Vue flavours of supporting packages: Vuex, Vue Router. 

It was a hectic time. I was grinding out what turned out to be our biggest and most ambitious app to date while  also work on a bunch of other work. I was about 80% done when I got sick. The right side of my face stopped moving. I went to the ER and was diagnosed with Bell's Palsy. It took me 6 weeks to recover. When I came back, another team member had jumped in and done what he could to finish.

One year later, we have a new work package that will mean changes to the events app. I've bumped a few deps since launch and fixed a few bugs, but I haven't taken a dive to fix anything big since launch.

I've learned a lot since I built this app (I should hope so, it's been a year) and it was time to improve the app with what I've learned. I made a checklist:

* Refactor the vuex store into namespaced store modules for each feature
* Refactor components into feature folders (and put the store modules in their respective folders)
* Update the filter module to use an upgraded feature set that I developed for a more recent app
* Make a generic state component to wrap the app and all modules so the current state of each feature and the app is simpler
* Find and implement a maintained datepicker library (I was using one that I made 3 years ago) because I don't have time to maintain my own anymore
* Remove a bunch of unused styles and leverage our Bootstrap 4 and custom utility classes wherever I can

It was an ambitious list. It took me 6 full days, but I did it. Am I 100% happy? No, of course not. Like any good dev, I can always find ten more things that I'd like to improve. However, this is a huge improvement. It's easier to work in the app now. Errors and loading states are so much simpler. The super-complex filter logic for each filter type has been broken into pieces now and it's easier to update logic without complicating unrelated store logic.

What are the next things?

* Write a class and subclasses for filters so that they are easier to define in the store
* Remove the dayjs dependency entitrely (I've started using Intl.DateTimeFormat, love it)
* Rewrite my custom inputs (which, actually, are pretty cool) to use a single validation provider vs. repeated code.

It's not past QA yet, so the updates won't be live, but I'm looking forward to launching them soon.

A well-planned, timeboxed refactor is a great way to hone your skills and practice things you've learned. I love refactors of my own code because I get instant feedback showing me how much I've grown as a developer, and I usually find the next thing I want to go and learn.

That's it for now. Keep coding. Keep learning.