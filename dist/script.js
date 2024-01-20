window.onscroll = function () {
  const navbar = document.querySelector("nav");
  const range = navbar.offsetTop;

  if (window.scrollY > range) {
    navbar.classList.add("navbar_fixed");
  } else {
    navbar.classList.remove("navbar_fixed");
  }
};

let typed = new Typed('.job',{
    strings : ['A front end Development ^500','A Full Stack', 'A Programmer'],
    typeSpeed : 140,
    delaySpeed : 90,
    backSpeed: 60,
    loop : true
  });


