# neo-city-2021
My own portfolio purpose webpage to demonstrate the ability of using React.js, JS, ECMA6 and so on.

# Technical note:
- Used scss (snap-scrolling effect)
- Looks like material-ui is more dynamic than font-awesome. Replacing in progress.


# Error note:
[x] scroll-snap-align (CSS) is not working!
location: App.scss
Link: https://css-tricks.com/practical-css-scroll-snapping/
Solution : apply navigation layout css setting to index.html (top priority) > index.css

[x] transition dynamic css - looks like hamburger bar(header) is somewhat duplicated(clash) with sidebar 'menu'. 
-Problem : hamburger bar dynamic transition does not showing up anymore.
-When ? :
as soon as ({menuOpen, setMenuOpen}) applies to Menu.jsx.
The problem will disappear if they removed.
-Solution : working on it. Temporailly, press F5 to refresh page.
🤔 Okay, I know this is not a perfect. Yet this way still works. Still, Consider fixing that transition bar. 
[urgency rate : 4/5 -> 1/5]
-Note : maybe start debugging it from [header, app, menu]. 
See any duplication in route.


# refactoring note (To Do List)
[] Menu.jsx - <li onClick={() => setMenuOpen(false)}>
reason : repeatitive * 3 times