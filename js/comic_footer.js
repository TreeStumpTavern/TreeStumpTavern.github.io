//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>All locations and D&D Lore referenced here are used under the WOTC Fan Content Policy.<br>All characters, 
        aside from those relating to published D&D materials, are either player OC's or improvised NPC's, 
        and thus fall under no licenses.<br>Any real world names, places, or events mentioned are purely incidental.
        <br>For any further inquiry, please contact us at treestumptavern@proton.me.</p>
        <p><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
        <p>Hosted on Github Pages</p>
    </footer>
`;
