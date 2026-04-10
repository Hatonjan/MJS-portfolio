/* Updates the footer to the current year */
document.getElementById("year").textContent = new Date().getFullYear(); 

/* Render the feature projects section */
async function loadFeaturedProjects() {
    try {
        // Fetch the JSON file
        const response = await fetch('./assets/data/projects.json');
        const data = await response.json(); 
        
        // Filter the first 4 featured projects
        const featured = data.projects
            .filter(p => p.featured === true)
            .sort((a, b) => a.order - b.order)
            .slice(0, 4);
    
        const html = featured.map(project => `
            <div class="project-box">
                <figure>
                    <img class="thumbnail" src="${project.image}" alt="${project.altText}">
                </figure>

                <div class="project-box-line"></div>
                
                <p><strong>${project.title}: </strong>${project.description}</p>
                
                <div class="project-box-line"></div>
                
                <p><strong>Technologies:</strong> ${project.techStack.join(', ')}</p>
                
                <div class="project-box-line"></div>

                <div class="cta-row">
                    ${project.repoUrl ? `
                        <a href="${project.repoUrl}" target="_blank">
                            <figure>
                                <img class="repo-icon" src="./assets/img/github-repo.png" alt="Github repo icon">
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
        `).join('');

        // Update the DOM
        document.getElementById('project-container').innerHTML = html;
    
    // Error handling
    } catch(error) {
        console.error('Error loading projects: ', error);
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadFeaturedProjects);
/* End of featured projects*/

/* Render the certs list in the education section */
async function loadCertifications() {
    try {
        // Fetch the certs.json
        const response = await fetch('./assets/data/certs.json');
        const data = await response.json();

        const html = data.certs.map(cert => `
            <li>
                <a href="${cert.url}">
                    <img src="${cert.icon}" alt="${cert.altText}">
                    <p>${cert.authority}</p>
                    <p>${cert.title}</p>
                </a>
            </li>    
        `).join('')

        // Update DOM
        document.getElementById('certs-list').innerHTML = html;
    } catch(error) {
        console.error('Error loading Certifications: ', error);
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadCertifications)
/* end of  the certs list  */

/* Hamburger Menu Toggle */
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

// Toggle the hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('mobile-menu');
});

// Close menu when a link is clicked
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        navigation.classList.remove('mobile-menu');
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    const isClickInsideNav = navigation.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navigation.classList.remove('mobile-menu');
    }
});
/* End of hamburger menu */