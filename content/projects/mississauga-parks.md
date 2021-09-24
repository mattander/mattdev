---
title: Mississauga Parks
description: "This is the find a park application that I built for my day job. I
  had lot's of challenges here. "
link: https://www.mississauga.ca/events-and-attractions/parks/find-a-park/
date: 2021-09-24T18:16:16.959Z
thumbnail: img/screen-shot-2021-09-24-at-2.17.11-pm.png
---
This project was a massive challenge to work on. 

Because of business req's we had to use the Esri platform to provide mapping and unfortunately, compared to Google Maps, the Esri platform is very clunky and definitely not fast.

The first version of the app I built took between four and ten seconds to become interactive because it had to wait for the map and all the layers to load before extracting all the raw data. I knew this was completely unusable so I went back to the drawing board. 

What I ended up doing was fetching all the raw tabular data from an api endpoint in JSON format and then stitching it to the map after the map was done loading. An extra layer of complexity was added by the fact that the Esri javascript SDK comes with its own reactivity model built in (???) and that one conflicted with the way better one built into Vue. So I had to store all the map stuff separately and then watch it using Esri watchers.

I think the final product is a great example of what happens what you have to use a product that's just not right for the job. What we have is an app where all the standard data loads very rapidly, and then (what feels like minutes later) the map shows up. 

Either way, this one was a great learning experience and also gave me a chance to really enhance the filter module that I use across most of our webapps. Much more flexible now.