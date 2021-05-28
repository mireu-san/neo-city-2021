# neo-city-2021
My own portfolio purpose webpage to demonstrate the ability of using React.js, JS, ECMA6, (mainly) scss and so on. Some npm package may be used. Inspired from the Japanese style.

# Technical note:
- Used scss (snap-scrolling effect)
- Looks like material-ui is more dynamic than font-awesome. Replacing in progress.
- ityped (npm) for typing effect of Home.jsx https://www.npmjs.com/package/ityped


# Error note:
1. [x] scroll-snap-align (CSS) is not working!
location: App.scss
Link: https://css-tricks.com/practical-css-scroll-snapping/
Solution : apply navigation layout css setting to index.html (top priority) > index.css

2. [x] transition dynamic css - looks like hamburger bar(header) is somewhat duplicated(clash) with sidebar 'menu'. 
-Problem : hamburger bar dynamic transition does not showing up anymore.
-When ? :
as soon as ({menuOpen, setMenuOpen}) applies to Menu.jsx.
The problem will disappear if they removed.
-Solution : working on it. Temporailly, press F5 to refresh page.
🤔 Okay, I know this is not a perfect. Yet this way still works. Still, Consider fixing that transition bar. 
[urgency rate : 4/5 -> 1/5]
-Note : maybe start debugging it from [header, app, menu]. 
See any duplication in route.

3. [] Looks like this layout is not applicable to its mobile screen. This need to be worked out. [Urgency rate : 5/5]

4. [] arrow_down.png (Home.jsx <= Home.scss>) dimming effect does not function correctly. [Urgency rate : 1/5]

# refactoring note (To Do List)
[] Menu.jsx - <li onClick={() => setMenuOpen(false)}>
reason : repeatitive * 3 times

# Personal note:
Looks like I am using more CSS than React. Yet, I used them correctly.
CSS is still the area I need to keep doing the research.