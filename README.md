2: 3:
This repo is only meant for review by support staff of smart-html-elements.

Hi Peter, I just used a former repository and did not change the name.
Ist should be named something like 'SmartGridKeyboardNavigationAnalyze'-


After install with npm or yarn please start by first executing 

npm run dev:electron
and
npm run dev_react

Most likely you will have to click |View|Reload| from the electron main-menu, at least I have to on my machine.

How to reproduce the issues:
----------------------------
- The magic number 1000 issue:
  The virtual dataset contains 1 MIO records. As long as you use the scrollbar -thumb you can easily scroll down and see
  last record.
  However, if you activate keyboard navigation by clicking on a row, and then press the 'End' key (on my notebook 
  it is Fn-key plus curser right), the grid will show record nr. 1000 in the first visible row and nothing else.
  You cannot recover from this useing the keyboard, only by using the scrollbar-thumb.
  
- The sticky scroll behavior:
  just press the cursor-down key and hold it.
  
I hope this can assist your analysis a bit

