document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  AOS.init();

  const flipCard = document.getElementById("flipCard");
  if (flipCard) {
    flipCard.addEventListener("click", () => {
      flipCard.classList.toggle("flipped");
    });
  }
});


// Get the search form
// const searchForm = document.getElementById("searchForm");

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Get form values
//     const city = searchForm.city.value;
//     const listingType = searchForm.listingType.value;
//     const minPrice = searchForm.minPrice.value;
//     const maxPrice = searchForm.maxPrice.value;

//     // Example: log the values (replace this with your API call)
//     console.log("Search Criteria:");
//     console.log("City:", city);
//     console.log("Listing Type:", listingType);
//     console.log("Min Price:", minPrice);
//     console.log("Max Price:", maxPrice);

//     // You can create a query string to send to backend
//     const queryParams = new URLSearchParams({
//         city,
//         listingType,
//         minPrice,
//         maxPrice
//     }).toString();

//     // Example: Redirect to search results page
//     // window.location.href = `/properties?${queryParams}`;

//     // OR fetch filtered results from your API
//     fetch(`http://localhost:5000/api/projects?${queryParams}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log("Filtered Projects:", data);
//             // TODO: Render the filtered properties on the page
//         })
//         .catch(err => {
//             console.error("Error fetching projects:", err);
//         });
// });
 


