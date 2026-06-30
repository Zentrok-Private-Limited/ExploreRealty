const container = document.getElementById("projectContainer");

// CHANGE THIS TO YOUR API URL
const API_URL = "https://explore-realty-backend-green.vercel.app/api/projects";

// LOAD PROJECTS WITH "UNDER CONSTRUCTION" FILTER FOR UPCOMING SECTION
async function loadProjects(type = "all") {
  try {
    container.innerHTML = "";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    let projects = await response.json();

    // Reverse to show latest first
    projects.reverse();

    // 1. FILTER BY PROPERTY TYPOLOGY CATEGORY (e.g., Residential, Commercial)
    if (type !== "all") {
      projects = projects.filter(
        (project) =>
          project.type && project.type.toLowerCase() === type.toLowerCase(),
      );
    }

    // 2. STRENGTHENED HARD FILTER FOR UPCOMING SECTION
    projects = projects.filter((project) => {
      if (!project.possession) return false;

      // Strip out spaces, hyphens, and force lowercase to prevent string matching misses
      const normalizedPossession = project.possession
        .toLowerCase()
        .replace(/[\s-]/g, "");

      return normalizedPossession.includes("underconstruction");
    });

    // NO PROJECTS STATE
    if (projects.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-20 border border-white/5 bg-[#121E31]/40">
          <span class="text-[10px] font-mono tracking-[0.3em] text-[#F6B352] block mb-2">( EMPTY REGISTRY )</span>
          <p class="font-serif font-light text-sm text-white/50">
            No upcoming under-construction profiles currently available.
          </p>
        </div>
      `;
      return;
    }

    // RENDER PROJECTS GRID CARDS
    projects.forEach((project) => {
      const card = document.createElement("div");

      // Premium Minimal Card Shell
      card.className =
        "bg-[#121E31] border border-white/10 overflow-hidden group hover:border-[#F6B352]/30 transition-all duration-500 flex flex-col justify-between";

      card.innerHTML = `
        <div>
          <!-- IMAGE WRAPPER WITH HOVER ZOOM EFFECT -->
          <div class="h-64 w-full overflow-hidden relative bg-[#0A0F18] border-b border-white/5">
            <img 
              src="${project.img}" 
              alt="${project.name}"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy"
            >
            <!-- Sleek Minimal Floating Classification Tag -->
            <span class="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-widest border border-[#F6B352]/30 bg-[#0A0F18]/90 backdrop-blur-md text-[#F6B352] px-2.5 py-1">
              ${project.type || "Premium"}
            </span>
          </div>

          <!-- CARD MATRIX CONTENT -->
          <div class="p-6">
            <h2 class="font-serif text-lg font-light text-white tracking-wide group-hover:text-[#F6B352] transition-colors duration-300 line-clamp-1 mb-1">
              ${project.name}
            </h2>

            <p class="font-mono text-[11px] uppercase tracking-wider text-white/40 flex items-center gap-1.5 mb-4">
              <i class="fa-solid fa-location-dot text-[#F6B352]/70 text-[10px]"></i>
              <span class="line-clamp-1">${project.location || "Location Specified On Query"}</span>
            </p>

            <!-- Dynamic Sub-tag verifying timeline status -->
            <p class="font-mono text-[9px] uppercase tracking-widest text-[#F6B352]/80 bg-[#F6B352]/5 border border-[#F6B352]/10 px-2 py-1 inline-block mb-4">
              <i class="fa-solid fa-person-digging mr-1"></i> ${project.possession}
            </p>

            <div class="flex items-baseline gap-1 pt-3 border-t border-white/5">
              <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Valuation:</span>
              <span class="text-base font-serif font-light text-[#F6B352] tracking-wide">
                ${project.price || "On Request"}
              </span>
            </div>
          </div>
        </div>

        <!-- STYLED CTAS BASE ANCHOR -->
        <div class="px-6 pb-6 pt-2">
          <a href="project-details.html?slug=${project.slug}"
            class="w-full text-center border border-white/20 bg-[#0A0F18] text-white/80 hover:text-[#0A0F18] text-[10px] uppercase tracking-widest font-mono py-3 hover:bg-[#F6B352] hover:border-[#F6B352] transition-all duration-300 block focus:outline-none">
            View Asset Profile →
          </a>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <div class="col-span-full text-center py-20 border border-red-900/20 bg-red-950/10">
        <span class="text-[10px] font-mono tracking-[0.3em] text-red-500 block mb-2">( REQUEST EXCEPTION )</span>
        <p class="font-serif font-light text-sm text-red-400/80">
          Failed to load asset index registry.
        </p>
      </div>
    `;
  }
}

// INITIAL REGISTRY LOAD
loadProjects();
