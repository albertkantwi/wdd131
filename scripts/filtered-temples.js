document.addEventListener('DOMContentLoaded', function () {
    const allTemplesEl = document.querySelector("#templeContainer"); 
    const homeEL = document.getElementById("home"); 
    const oldEl = document.getElementById("old"); 
    const newEL = document.getElementById("new");
    const largeEL = document.getElementById("large");
    const smallEl = document.getElementById("small"); 
    const h1El = document.querySelector('h1'); 

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

let isFirstCard = true;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-685730-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
  }
];


function insertCard(temple) {
        const formatter = new Intl.NumberFormat('en-US');

        const card = document.createElement("div");
        card.classList.add("card");

        // Name
        const heading = document.createElement("h2");
        heading.textContent = temple.templeName;
        card.appendChild(heading);

        // Location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        // Dedicated
        const dedicationDate = document.createElement("p");
        dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicationDate);

        // Size
        const size = document.createElement("p");
        size.textContent = `Size: ${formatter.format(temple.area)} sq. ft.`;
        card.appendChild(size);

        // Image
        const photo = document.createElement("img");
        photo.src = temple.imageUrl;
        photo.alt = temple.templeName;

        photo.loading = isFirstCard ? "eager" : "lazy";
        isFirstCard = false;

        card.appendChild(photo);

        allTemplesEl.appendChild(card);
    }

    function clearPage() {
        allTemplesEl.innerHTML = "";
        isFirstCard = true;
    }

    function goHome() {
        h1El.textContent = "Temples";
        clearPage();
        temples.forEach(temple => insertCard(temple));
    }

    function getOld() {
        clearPage();
        h1El.textContent = "Old Temples";

        temples
            .filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)
            .forEach(insertCard);
    }

    function getNew() {
        clearPage();
        h1El.textContent = "New Temples";

        temples
            .filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)
            .forEach(insertCard);
    }

    function getLarge() {
        clearPage();
        h1El.textContent = "Large Temples";

        temples
            .filter(t => t.area > 90000)
            .forEach(insertCard);
    }

    function getSmall() {
        clearPage();
        h1El.textContent = "Small Temples";

        temples
            .filter(t => t.area < 10000)
            .forEach(insertCard);
    }

    requestIdleCallback(goHome);

    oldEl.addEventListener("click", getOld); 
    homeEL.addEventListener("click", goHome); 
    newEL.addEventListener("click", getNew); 
    largeEL.addEventListener("click", getLarge);
    smallEl.addEventListener("click", getSmall);
});