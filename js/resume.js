async function loadCertifications() {
    try {
        const response = await fetch('../../assets/data/certs.json');
        const data = await response.json();

        // Filter and render accredited certifications
        const accreditedCerts = data.certs
            .filter(cert => cert.recognizedForCredit === true)
            .map(cert => `
                <ul>
                    <li>
                        <a href="${cert.url}" target="_blank">
                            <img src="../../${cert.icon}" alt="${cert.altText}">
                            <p>${cert.authority}</p>
                            <p>${cert.title}</p>
                        </a>
                    </li>
                </ul>    
            `).join('');

        // Filter and render complementary certifications
        const complementaryCerts = data.certs
            .filter(cert => cert.recognizedForCredit === false)
            .map(cert => `
                <ul>
                    <li>
                        <a href="${cert.url}" target="_blank">
                            <img src="../../${cert.icon}" alt="${cert.altText}">
                            <p>${cert.authority}</p>
                            <p>${cert.title}</p>
                        </a>
                    </li>
                </ul>
            `).join('');

        // Combine both and update DOM
        document.getElementById('accredited-certs').innerHTML = accreditedCerts;
        document.getElementById('complementary-certs').innerHTML = complementaryCerts;

    } catch(error) {
        console.error('Error loading Certifications: ', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCertifications);