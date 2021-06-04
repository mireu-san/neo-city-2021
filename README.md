# neo-city-2021
My own portfolio purpose webpage to demonstrate the ability of using React.js, JS, ECMA6, (mainly) scss and so on. Some npm package may be used. Inspired from the Japanese style.

# Technical note:
- Used scss (snap-scrolling effect)
- Looks like material-ui is more dynamic than font-awesome. Replacing in progress.
- ityped (npm) for typing effect of Home.jsx https://www.npmjs.com/package/ityped
- setData (an arbitrary function extracted from useState): https://www.valentinog.com/blog/hooks/ & https://www.codota.com/code/javascript/functions/react/setData
https://velog.io/@vies00/React-Hooks
- Dynamic component (e.g. map)

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
-Solution : z-index typo error. Be sure, the number which is lower than the existing one may cause to completely goes below its hierarchy!

3. [x] Looks like this layout is not applicable to its mobile screen. This need to be worked out. [🍳Urgency rate : 5/5]

4. [x] arrow_down.png (Home.jsx <= Home.scss>) dimming effect does not function correctly. [Urgency rate : 1/5]
Forget it, remove this all. Just replace it to the navbar first. Add some extra nav icon on the left side later.

5. [x] hover feature does not work properly. Double check this issue after rebooting.
Forget it, remove this all. Just replace it to the navbar first. Add some extra nav icon on the left side later.

6. [x] All layout does not support mobile responsive. Keep trying. [🍳Urgency : 5/5]

7. [x] Contact.jsx has some size resolution issue.
cause : unnecesarily added another div as a wrapper.
solution: delete that wrapper like div. Otherwise, it causes scss to assume that first wrapper like div is the top hierarchy to apply them all first.
Caution: there is no div wrapper! Just for explaning purpose here.

# refactoring note (To Do List)
[] Menu.jsx - <li onClick={() => setMenuOpen(false)}>
reason : repeatitive * 3 times
solution : Advised to 'independent' them separately.

[x] optional - change all camel-cases equally as JS format (current one is closer to python one)
reason: just realised this does not look like JS style.
advisory: Next time, be sure to follow the rule. And never get confused with this issue again.

# Personal note:
Looks like I am using more CSS than React. Yet, I used them correctly.
CSS is still the area I need to keep doing the research.

# Final checklist (Main Objectives)
[x] header - mobile [x]
[x] footer - exclude this part.
[x] menu
[x] contact - typo mistake is now fixed
[x] home - mobile [x]
[x] portfolio
[x] portfolio list
[x] works
[x] emailjs

# To do list (further improvement ASAP)
[] Add additional nav icon on the left side of its screen.

[Working...] differentiate each image of 'works.jsx'.
So why am I struggling here again? To insert Link hook properly, need to review how to use 'useEffect'.
 

[x] emailjs

[] insert Link or NavLink hook to either portfolio or works

[] For mobile : Create additional page for each project - as an introduction page. 
This is the only perfect way to internally, freely introduce each of it.