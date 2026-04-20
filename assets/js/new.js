//  navbar toggle for mobile menu 
 const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  // end of navbar toggle for mobile menu

//   swiper slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
//   end  of swiper slider

// home page testimonial slider.
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoHeight: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//   end of testimonial slider
// contact page form js 
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully ✅");
  });

  // 🔥 Marquee Logos Data
const projectLogos = [
  { name: "ATS", img: "assets/img/logo/ats.jpg" },
  { name: "M3M", img: "assets/img/logo/m3m.jpg" },
  { name: "Bhutani", img: "assets/img/logo/bhutani.jpg" },
  { name: "Signature", img: "assets/img/logo/signature.webp" },
  { name: "Kalpataru", img: "assets/img/logo/kalpataru.jpg" },
  { name: "L&T", img: "assets/img/logo/lnt.jpg" },
  { name: "AU", img: "assets/img/logo/au.jpg" },
  { name: "Escon", img: "assets/img/logo/escon.jpg" },
  { name: "Vihaan Greens", img: "assets/img/logo/vihaan.jpg" },
  { name: "IBP Windsor Valley", img: "assets/img/logo/ibp.png" },
  { name: "Sky Garden", img: "assets/img/logo/sky-garden.png" },
  { name: "Ratan Pearls", img: "assets/img/logo/ratan.jpg" },
  { name: "Evergreen Square", img: "assets/img/logo/evergreen.png" },
  { name: "Corbett County", img: "assets/img/logo/corbett.png" },
  { name: "Golden I", img: "assets/img/logo/golden.png" },
  { name: "Vrinda Group", img: "assets/img/logo/vrinda-group.png" },
  { name: "Grandthum", img: "assets/img/logo/grandthum.png" },
  { name: "Paradise", img: "assets/img/logo/paradise.jpg" },
  { name: "Prestige", img: "assets/img/logo/prestige.jpg" },
  { name: "ACE", img: "assets/img/logo/ace.jpg" }
];

// 🔥 Get container
const marquee = document.getElementById("logoMarquee");
const marqueeClone = document.getElementById("logoMarqueeClone");

if (marquee && marqueeClone) {

  const html = projectLogos.map(l => `
    <img src="${l.img}" 
         alt="${l.name}"
         loading="lazy"
         onerror="this.src='assets/img/logo/default.png'"
         class="h-12 md:h-14 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition duration-300">
  `).join("");

  marquee.innerHTML = html;
  marqueeClone.innerHTML = html; // 🔥 duplicate for seamless loop
}