# neo-city-2021
My own portfolio purpose webpage to demonstrate the ability of using React.js, JS, ECMA6 and so on.

# Technical note:
- Used scss (snap-scrolling effect)
- Looks like material-ui is more dynamic than font-awesome. Replacing in progress.


# Error note:
[X] scroll-snap-align (CSS) is not working!
location: App.scss
Link: https://css-tricks.com/practical-css-scroll-snapping/
Solution : apply navigation layout css setting to index.html (top priority) > index.css

[ ] transition dynamic css - looks like hamburger bar(header) is somewhat duplicated(clash) with sidebar 'menu'. 
-Problem : hamburger bar dynamic transition does not showing up anymore.
-When ? :
as soon as ({menuOpen, setMenuOpen}) applies to Menu.jsx.
The problem will disappear if they removed.
-Solution : working on it.
-Note : maybe start debugging it from [header, app, menu]. 
See any duplication in route.
