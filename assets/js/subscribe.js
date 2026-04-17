/* ============================
   SUBSCRIBE FORM SUBMIT
============================ */
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("subscribeEmail");
    const msgEl = document.getElementById("subscribeMsg");

    const email = emailInput.value.trim();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msgEl.innerText = "Please enter a valid email!";
      return;
    }

    try {
      const url =
        window.location.hostname === "localhost"
          ? "http://localhost:5000/subscribe"
          : "https://explorerealty.onrender.com/api/subscribe";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const text = await res.text();
      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      msgEl.innerText = data.message;
      emailInput.value = ""; // clear input
    } catch (err) {
      console.error("Subscribe error:", err);
      msgEl.innerText = "Server error! Please try again later.";
    }
  });
}


/* ============================
   NAVBAR OUTSIDE CLICK CLOSE
============================ */
document.addEventListener("click", function (event) {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  // safety check
  if (!navbar || !toggler) return;

  const isOpen = navbar.classList.contains("show");

  if (!isOpen) return; // already closed

  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickOnToggler = toggler.contains(event.target);

  if (!isClickInsideNavbar && !isClickOnToggler) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar)
      || new bootstrap.Collapse(navbar);

    bsCollapse.hide();
  }
});


/* ============================
   NAV LINK CLICK → CLOSE MENU
============================ */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.getElementById("navbarNav");

    if (!navbar) return;

    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});