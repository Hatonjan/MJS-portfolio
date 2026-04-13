let allProjects = [];

async function loadProjects() {
    try {
        const response = await fetch('../../assets/data/projects.json');
        const data = await response.json();
        allProjects = data.projects;

        // Create array of projects with their original indices
        const projectsWithIndex = allProjects.map((project, index) => ({
            ...project,
            originalIndex: index
        }));

        // Sort: featured first, then non-featured
        const sortedProjects = projectsWithIndex.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return a.originalIndex - b.originalIndex;
        });

        // Custom dropdown options
        const dropdownOptions = sortedProjects.map((project) => `
            <li class="dropdown-option" data-value="${project.originalIndex}">
                ${project.title} ${project.featured ? '★' : ''}
            </li>
        `).join('');

        console.log(dropdownOptions)

        // HTML shell
        const dropdownHtml = `
            <div class="dropdown-container">
                <label>SELECT A PROJECT: </label>

                <div class="dropdown" id="project-dropdown">

                    <div class="dropdown-selected">
                        <span id="selected-text">${allProjects[0].title}</span> 
                        <img 
                            class="dropdown-arrow"
                            src="../../assets/svg/dropdown-arrow.svg" 
                            alt="Arrow pointing down"
                        >
                    </div>
                    
                    <ul class="dropdown-options">
                        ${dropdownOptions}
                    </ul>
                </div>

            </div>
            <div id="project-details"></div>
        `;

        document.getElementById('project-container').innerHTML = dropdownHtml;

        // First project by default
        renderProject(0);

        // Fire up the event listeners
        attachDropdownListeners();

    } catch(error) {
        console.error('Error loading Projects: ', error);
    }
}

function attachDropdownListeners() {
    const dropdown = document.getElementById("project-dropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const selectedText = document.getElementById("selected-text");
    const options = dropdown.querySelectorAll(".dropdown-option");

    // Toggle the dropdown open/closed
    selected.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    // Handle clicks event
    options.forEach(option => {
        option.addEventListener("click", () => {
            // Update the visible text
            selectedText.innerText = option.innerText;
            
            // Render the new project based on the data-value index
            const projectIndex = option.getAttribute("data-value");
            renderProject(projectIndex);

            // Close the dropdown
            dropdown.classList.remove("active");
        });
    });

    // Close the dropdown if the user clicks anywhere else on the page
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
}

function renderProject(index) {
    const project = allProjects[index]; 
    const projectHtml = `
        <h2>${project.title}</h2>
        <div class="project-box">
            <figure>
                <img class="thumbnail" src="../../${project.image}" alt="${project.altText}">
            </figure>

            <div class="project-box-line"></div>

            <p><strong>DESCRIPTION: </strong>${project.description}</p>                
            
            <div class="project-box-line"></div>

            <p><strong>TECHNOLOGIES:</strong> ${project.techStack.join(', ')}</p>
            
            <div class="project-box-line"></div>

            <div class="cta-row">
                ${project.repoUrl ? `
                    <a href="${project.repoUrl}" target="_blank">
                        <figure>
                            <img class="repo-icon" src="../../assets/img/github-repo.png" alt="Github repo icon">
                        </figure>
                    </a>
                ` : `
                    <p class="unavailable-url">PRIVATE REPO</p>
                `}       
                
                ${project.responsive ? `
                    <a href="${project.liveUrl}" target="_blank" class="btn-live">LIVE VIEW</a>
                ` : ` 
                    <a href="${project.liveUrl}" target="_blank" class="btn-live desktop-only">LIVE VIEW</a>
                    <p class="keyboard-warning">KEYBOARD REQUIRED</p>
                `}
            </div>
        </div>
    `;

    document.getElementById('project-details').innerHTML = projectHtml;
}

document.addEventListener('DOMContentLoaded', loadProjects);