This repo is only meant for review by support staff of smart-html-elements.

I finally found a way to create a desktop like layout with the help of this great post:
https://www.blinkingcaret.com/2016/08/03/make-web-page-looks-like-desktop-app/

After install with npm or yarn please start by first executing 

npm run dev:electron
and
npm run dev_react

Most likely you will have to click |View|Reload| from the electron main-menu, at least I have to on my machine.

The docking-layout now always takes all of the space left between app-menu at the top and status-bar at the bottom.
No more important, but I wonder why width and height of the smart-docking-layout seem to be 50% by default, so that
I have to set 100% explicitly alongside to 'position: relative'.

An important question now (and this is serious) is the sizing of many of your smart elements.
I know these are all designer decisions, but for a desktop like application (which we have in mind).
We want to port and extend existing productive tools for test-analysis and managing inhouse processes.  
People are used to have a lot of information on a screen at once, which implies the need for small controls
and small row-heights in tables.
Your menus, tab-captions, table-captions, buttons and so on are all far to big, especially in height.
The desired size is roughly that of the example menu and the status-bar you can see here.
All smart elements document a lot of css values but I cannot see an overview how to change their sizes 
so that all of them will look similar again. 
Also the resize dividers between panes are a bit too bold. 
And the data tables - how can we customize the size (especially height) of a caption row and all data rows?



