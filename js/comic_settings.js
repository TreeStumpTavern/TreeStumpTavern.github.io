//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 4; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "./img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = 1;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "The Fall of Elturel", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2023, 7, 17), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "The party receives a quest to purge evil cultists, but in the meantime, the city of Elturel disappears!", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
            <em><p>The city of Elturel had called for aid,<br>To lend them your bow, your staff, and your blade<br>
            Cultists were spotted in the forests of the land,<br>Their symbols: the blood drop, the skull, and the hand.</p>
            <p>So did we arrive to bolster the guard,<br>The paladin, the ranger, the druid, the bard,<br>
            We fought them with steel, and we fought them with song,<br>The forces of evil did not persist long.</p>
            <p>Yet something did happen, that darkened the skies,<br>The air burst with thunder and loud distant cries,<br>
            We witnessed a sight most horrific and weird,<br>The city of Elturel had, at once, disappeared.</p></em>
            `
    },
    {
        pgNum: 2,
        title: "Arrival in Baldur's Gate",
        date: writeDate(2023, 7, 17),
        altText: "The party arrive at Baldur's Gate, infiltrate the cultist hideout, and find the Infernal Box",
        imageFiles: 1,
        authorNotes: `
            <em><p>We gathered the refugees and headed out west,<br>To save Elturel had become our new quest!<br>
            The answers would surely be found with great haste,<br>In the city of schemes, and of crime, Baldur's Gate.</p>
            <p>We followed and traced through the rumours of cults,<br>In a well guarded bathhouse they yielded results,<br>
            Here the Cult of the Dead Three had conspired to sell,<br>Baldur's Gate, as Elturel once, to an Archduke of hell!</p>
            <p>We procured a strange box, of infernal design,<br>That contained a scorched contract with the fine dotted line,<br>
            "Elturel shall be guarded for a century's time,<br>After which Elturel, and its folk, shall be mine"</p></em>
            `
    },
    {
        pgNum: 3,
        title: "Thwarted Assassination",
        date: writeDate(2023, 10, 1),
        altText: "The party stop an assassination plot and uncover the leadership of the cultists.",
        imageFiles: 1,
        authorNotes: `
            <em><p>We took it upon us to thwart the dark plot,<br>And struck at the iron while the iron was hot,<br>
            And by struck I do mean the swing and thrust of our swords,<br>At the henchmen and servants of evil Dead Gods.</p>
            <p>Yet the chaos and mayhem did not go unnoticed,<br>The cultists, now desperate, became much more focused,<br>
            Yet Coyote the Paladin, and Suki the Ranger,<br>Protected a noble duke of the city from danger!</p>
            <p>The foiled assassination put our names on their lists,<br>For the cultists exclaimed them with tightly clenched fists,<br>
            Thus their leader, Duke Thalamra, put a price on our heads,<br>Pushing us to make sure to put an end to her threats.</p></em>
            `
    },
    {
        pgNum: 4,
        title: "The Cult of Zariel",
        date: writeDate(2023, 10, 1),
        altText: "The party infiltrate the cultist lair, face Thalamra Vanthampur, and commence their voyage to Avernus.",
        imageFiles: 1,
        authorNotes: `
            <em><p>Beneath the estate of the treacherous duke,<br>We found out the truth that no lie could rebuke,<br>
            The cultists that damned Elturel into Hell,<br>Had done so to serve the archfiend Zariel.</p>
            <p>Thalamra made sure to confront us head on,<br>The battle was fierce, our hope nearly gone,<br>
            Empowered by pacts and magic infernal,<br>She fought to ensure that she'd govern eternal.</p>
            <p>Yet best her we did, or rather, did I,<br>"I'll see you in Hell!", she screamed her last cry,<br>
            Our goal was now certain, as you can foretell,<br>Thus we conjured a portal to hell-bound Elturel.</p></em>
            `
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
