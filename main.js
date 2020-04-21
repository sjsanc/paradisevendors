const returnButton = document.getElementById('returnButton');

const showCaseData = [
    {
        title: "Theology & Geometry",
        img: "css/images/tartan.jpg",
        description: "His valve protested against the pimples, the surly face that seemed to hang from the long well-lubricated  hair,  the  cigarette  behind  the  ear,  the  aquamarine  jacket,  the  delicate boots,  the  tight  trousers  that  bulged  offensively  in  the  crotch  in  violation  of  all  rules  of theology and geometry",
        link: "theology.html",
    },
    {
        title: "Over  here,  Mother Commerce", 
        img:"css/images/tartan2.jpg",
        description: "La Trixie still keeps her  own counsel, thereby proving herself even  wiser than I had thought. I suspect that  this  woman  knows  a  great  deal,  that  her  apathy  is  a  facade  for  her  seeming  resentment  against  Levy Pants. She grows more coherent when she speaks of retirement. I have noticed that she needs a new pair of white  socks,  her  current  pair  having  grown  rather  gray.",
        link: "mother_commerce.html",
    },
    {
        title: "Boethius", 
        img: "css/images/tartan3.jpg",
        description: "In  the  foreground,  on  a  trapeze,  was  the  heroine.  She  swung  back  and  forth  to  a waltz. She smiled in a huge close-up. Ignatius inspected her teeth for cavities and fillings. She  extended  one  leg.  Ignatius  rapidly  surveyed  its  contours  for  structural  defects.  She began to sing about trying over and over again until you succeeded. Ignatius quivered as the philosophy of the lyrics became clear. He studied her grip on the trapeze in the hope that the camera would record her fatal plunge to the sawdust far below.",
        link: "boethius.html",
    },
    {
        title: "Oh, my valve!", 
        img: "css/images/tartan4.jpg",
        description: "“Move along, you coxcomb,” Ignatius belched, the gassy eructations echoing between the  walls  of  the  Alley.  The  women’s  art  guild  turned  its  hats  toward  the  source  of  the volcanic  sound.  Ignatius  glared  at  the  young  man’s tawny  velvet  jacket  and  mauve cashmere  sweater  and  the  wave  of  blonde  hair  that  fell  over  the  forehead  of  his  sharp, glittering face. “Get away from me before I strike you down.",
        link: "myvalve.html",
    },
    {
        title: "Degeneracy", 
        img: "css/images/tartan5.jpg",
        description: "I intend to draw Miss Trixie out rather shortly; I suspect that this Medusa of capitalism has many valuable insights and more than one pithy observation to offer. The only sour note -- and here I degenerate into slang to more properly set the mood for the creature whom I am about to discuss -- was Gloria, the stenographer, a young and brazen tart.",
        link: "degeneracy.html",
    },
    {
        title: "The Crusade for Moorish Dignity", 
        img: "css/images/tartan6.jpg",
        description: "I  am  holding  before  you  the  proudest  of banners, an identification of our purpose, a visualization of all that we seek.” The workers studied  the  stains  more  intensely.  “If  you  wish  to simply  rush  into  the  office  like  cattle, you will have participated in nothing more than a riot. This banner alone gives form and credence  to  the  agitation. There  is  a  certain  geometry  involved  in  these  things,  a  certain ritual which must be observed.",
        link: "moorish_dignity.html",
    },
    {
        title: "Please. I don’t dance", 
        img: "css/images/tartan7.jpg",
        description: "I  says,  ‘What’s  that  you  writing  now,  boy?’ And he say, ‘I’m writing about being a weenie vendor.’ Ain’t that terrible? Who want to read  a  story  like  that?  You  know  how  much  he  brought  home  from  that  weenie  place today? Four dollars. How I’m gonna payoff that man?'",
        link: "i_dont_dance.html",

    },
    {
        title: "Strippers and pimps and pornographers", 
        img: "css/images/feur.jpg",
        description: "And  especially  Myrna Minkoff.  The  musky  minx  must  be  dealt  with.  Somehow.  Someday.  She  must  pay. Whatever  happened,  he  must  attend  to  her  even  if  the  revenge  took  years  and  he  had  to stalk her through decades from one coffee shop to another, from one folk singing orgy to another,  from  subway  train  to  pad  to  cotton  field  to  demonstration.  Ignatius  invoked  an elaborate  Elizabethan  curse  upon  Myrna  and,  rolling  over,  frantically  abused  the  glove once more.",
        link: "strippers_and_pimps.html",
    }
]

// PRODUCT DISPLAY LOGIC
const productDisplay = document.getElementById('productDisplay');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');

console.log(productTitle);

// get current page url
const parseURL = () => {
    const currentURL = window.location.href;
    const regex = /\/(?:.(?!\/))+$/g;
    let found = currentURL.match(regex);
    found = found[0].split('');
    found.shift();
    found = found.join('');
    return found;
}

const renderPage = () => {
    for(i = 0; i < showCaseData.length; i++) {
        if(parseURL() === showCaseData[i].link) {
            productDisplay.style.backgroundImage = "url(" + showCaseData[i].img + ")";
            productTitle.innerText = showCaseData[i].title;
            productDescription.innerText = showCaseData[i].description;
        }
    }
}
renderPage();




// END PRODUCT DISPLAY LOGIC

// SHOWCASE LOGIC

const showcaseArray = {
    titles: [],
    images: [],
    links: []
}
showcaseArray.images = document.getElementsByClassName('showcase-card');
showcaseArray.titles = document.getElementsByClassName('showcase-title');
showcaseArray.links = document.getElementsByClassName('showcase-link');

const random = () => {
    return Math.floor(Math.random() * 8);
}

const uniqueChecker = () => {
    let selection = [];
    selection.push(random());
    do {
        let n = random();
        
        if(selection.indexOf(n) == -1) {
            selection.push(n);
        } else {
            console.log("lol");
        }
        
    } while (selection.length < showcaseArray["titles"].length)
    return selection
}
let uniqueList = uniqueChecker();

// assign the showcase cards to a random tartan image
for(let i = 0; i < showcaseArray["images"].length; i++) {
    showcaseArray["images"][i].style.backgroundImage = "url(" + showCaseData[uniqueList[i]].img + ")";
    showcaseArray["titles"][i].innerText = showCaseData[uniqueList[i]].title;
    showcaseArray["links"][i].href = showCaseData[uniqueList[i]].link;
}
// END SHOWCASE LOGIC

// Scroll button
const scrollTop = () => {
    window.scrollTo({ 
        top: 0, 
        behaviour: 'smooth' });
    console.log("scrolled!");
}
returnButton.addEventListener('click', scrollTop);