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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//HEADER
const navTag = document.getElementsByTagName('nav');

  const ATags = document.querySelectorAll('a');
    ATags[0].className('.nav-item-1');
    ATags[0].textContent('Services');
    ATags[1].className('.nav-item-2');
    ATags[1].textContent('Product');
    ATags[2].className('.nav-item-3');
    ATags[2].textContent('Vision');
    ATags[3].className('.nav-item-4');
    ATags[3].textContent('Features');
    ATags[4].className('.nav-item-5');
    ATags[4].textContent('About');
    ATags[5].className('.nav-item-6');
    ATags[5].textContent('Contact');

  const logoImg = document.getElementById('logo-img');
    logoImg.src = 'C:\Users\Tim\Lambda WebPT8\2. Web Applications I\1. Applied JavaScript\DOM-I\img\logo.png'


//CTA SECTION
const ctaText = document.getElementsByClassName('cta-text');

  const ctaH1 = document.ctaText.getElementsByTagName('h1');
    ctaText.ctaH1.textContext('DOM Is Awesome');

  const ctaButton = document.ctaText.getElementsByTagName('button');
    ctaText.ctaButton.textContent('Get Started');

  const ctaImg = document.getElementById('cta-img');
  ctaImg.src = 'C:\Users\Tim\Lambda WebPT8\2. Web Applications I\1. Applied JavaScript\DOM-I\img\header-img.png'


//TOP CONTENT SECTION



//BOTTOM CONTENT SECTION



//CONTACT SECTION



//FOOTER



