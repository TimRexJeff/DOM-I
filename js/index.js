const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


//HEADER

let ATags = document.querySelectorAll('a');
ATags.forEach((element, i) => {
  element.textContent = siteContent['nav'][`nav-item-${i + 1}`]
});

let logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', siteContent["nav"]['img-src'])


//CTA SECTION
let cta = document.querySelector('h1');

let header1 = siteContent.cta.h1.substring(0, 3);
let header2 = siteContent.cta.h1.substring(3, 6);
let header3 = siteContent.cta.h1.substring(6, 14);

let newHeader = `${header1} \n ${header2} \n ${header3}`;
cta.textContent = newHeader;
cta.style.whiteSpace = "pre-line";

//CTA Button
const ctaButton = document.getElementsByTagName('button');
ctaButton.textContent = siteContent["cta"]["button"];

//CTA Img
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);



//MAIN CONTENT SECTION
let mainH4 = document.querySelectorAll('.text-content h4');

let mainText = document.querySelectorAll('.text-content p');

const siteMain = siteContent['main-content'];
mainH4[0].textContent = siteMain['features-h4'];
mainH4[1].textContent = siteMain['about-h4'];
mainH4[2].textContent = siteMain['services-h4'];
mainH4[3].textContent = siteMain['fproduct-h4'];
mainH4[4].textContent = siteMain['vision-h4'];

mainText[0].textContent = siteMain['features-content'];
mainText[1].textContent = siteMain['about-content'];
mainText[2].textContent = siteMain['services-content'];
mainText[3].textContent = siteMain['fproduct-content'];
mainText[4].textContent = siteMain['vision-content'];

console.log(mainH4);


// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },


// //BOTTOM CONTENT SECTION



// //CONTACT SECTION
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },


// //FOOTER
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"



