const container = document.getElementById("projectContainer");

// CHANGE THIS TO YOUR API URL
const API_URL = "https://explore-realty-backend-green.vercel.app/api/projects";

// LOAD PROJECTS
async function loadProjects(type = "all") {
  try {
    container.innerHTML = "";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    let projects = await response.json();

  
    projects.reverse();

    if (type !== "all") {
      projects = projects.filter(
        (project) =>
          project.type && project.type.toLowerCase() === type.toLowerCase(),
      );
    }

    // NO PROJECTS
    if (projects.length === 0) {
      container.innerHTML = `
        <p class="text-center col-span-full text-gray-500">
          No projects found
        </p>
      `;
      return;
    }

    // RENDER PROJECTS
    projects.forEach((project) => {
      const card = document.createElement("div");

      card.className =
        "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition";

      card.innerHTML = `
        <img 
          src="${project.img}" 
          alt="${project.name}"
          class="h-52 w-full object-cover"
        >

        <div class="p-4">

          <h2 class="text-xl font-semibold mb-2">
            ${project.name}
          </h2>

          <p class="text-gray-500 text-sm mb-3">
            ${project.location || ""}
          </p>

          <div class="flex justify-between items-center mb-3">

            <span class="text-blue-600 font-bold">
              ${project.price || ""}
            </span>

            <span class="text-xs px-3 py-1 bg-gray-100 rounded-full capitalize">
              ${project.type || ""}
            </span>

          </div>

          <a href="project-details.html?slug=${project.slug}"
            class="inline-block mt-4 text-sm text-[#162346] border-b border-[#162346] hover:text-[#f6b352] hover:border-[#f6b352] transition">
            Explore Project →
          </a>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <p class="text-center col-span-full text-red-500">
        Failed to load projects
      </p>
    `;
  }
}

// INITIAL LOAD
loadProjects();
