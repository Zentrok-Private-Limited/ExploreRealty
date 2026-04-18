function loadHomeProjects() {

  const container = document.getElementById("homeProjects");

  if (!container) return;

  // 👉 सिर्फ 4 project दिखाओ
  const featured = projects.slice(0, 4);

  let html = "";

  featured.forEach(p => {

    html += `
      <div class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

        <!-- Image -->
        <a href="project-detail.html?id=${p.id}">
          <img src="${p.img}" class="w-full h-40 object-cover">
        </a>

        <!-- Content -->
        <div class="p-4">

          <h3 class="font-semibold text-sm mb-1">
            ${p.name}
          </h3>

          <p class="text-gray-500 text-sm">
            ${p.price}
          </p>

          <a href="project-detail.html?id=${p.id}"
             class="block mt-3 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm">
             View Details
          </a>

        </div>

      </div>
    `;
  });

  container.innerHTML = html;
}
document.addEventListener("DOMContentLoaded", () => {
  loadHomeProjects();
});