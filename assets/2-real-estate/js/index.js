var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
    
let currentTextIndex = 0;

let currentImgIndex = 0;

//
//image carousel
function showImg(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
}

slides[index].classList.add('active');
}

function showText(index) {
    for (let i = 0; i < slidesText.length; i++) {
        slidesText[i].classList.remove('active');
    }

    slidesText[index].classList.add('active');
}


function next() {
    currentImgIndex = (currentImgIndex + 1) % slides.length;
    currentTextIndex = (currentTextIndex + 1) % slidesText.length;

    showImg(currentImgIndex);
    showText(currentTextIndex);
  }

  let timerInterval = setInterval(next, 10000);

slideshow.addEventListener('mouseenter', () => {
    clearInterval(timerInterval);
});

slideshowText.addEventListener('mouseenter', () => {
    clearInterval(timerInterval);
});

slideshow.addEventListener('mouseleave', () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(next, 10000);
});

slideshowText.addEventListener('mouseleave', () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(next, 10000);
});



showText(currentTextIndex);
showImg(currentImgIndex);

//



//// toggle icon
let menuIcon = document.querySelector('.toggle');
let nav = document.querySelector('header ul')
menuIcon.onclick = () => {
  menuIcon.classList.toggle('act');
  nav.classList.toggle('acti')
  
};


//Hover
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header ul li a');


window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
         navLinks.forEach((links) => {
            links.classList.remove('active');
            document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');      
         });
      };
   });
   let header = document.querySelector('header')
   
   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('act');
};






//For COntainer
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const homeSection = document.getElementById('home');
  const housesSection = document.getElementById('houses');
  const aboutSection = document.getElementById('about');
  // const contactSection = document.getElementById('contact')
  const logo = document.querySelector('header .logo')
  // Add more section variables as needed
  // Get the height of the sections
  const homeSectionHeight = homeSection.offsetHeight;
  const housesSectionHeight = housesSection.offsetHeight;
  const aboutSectionHeight = aboutSection.offsetHeight;
  // const contactSectionHeight = contactSection.offsetHeight;
  // Calculate the scroll position
  const scrollPosition = window.scrollY;
  
  if (scrollPosition < homeSectionHeight) {
      header.classList.remove('scrolled');
      navLinks.forEach(link => {
        link.classList.remove('focl');
      });
      logo.classList.remove('col');
  } else if (scrollPosition >= homeSectionHeight && scrollPosition < homeSectionHeight + housesSectionHeight) {
      header.classList.add('scrolled');
      document.querySelectorAll('header ul li a').forEach(link => {
        link.classList.add('focl');
      });
      logo.classList.add('col');
  } else if (scrollPosition >= homeSectionHeight + housesSectionHeight && scrollPosition < homeSectionHeight + housesSectionHeight + aboutSectionHeight) {
    header.classList.add('scrolled');
    logo.classList.add('col');
  } 
  else {
      header.classList.remove('scrolled');
      document.querySelectorAll('header ul li a').forEach(link => {
        link.classList.remove('focl');
      });
      logo.classList.remove('col');
  }

  // Add conditions for other sections
  // if (scrollPosition >= homeSectionHeight + housesSectionHeight && scrollPosition < homeSectionHeight + housesSectionHeight + aboutSectionHeight) {
  //   header.classList.add('scrolled');
  // } 
});
