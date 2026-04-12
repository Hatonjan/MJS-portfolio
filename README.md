# Jonathan Scott Portfolio

A modern, responsive portfolio website showcasing projects, certifications, and professional experience.

## Features

- **Dynamic Project Display** — Interactive dropdown menu to browse and view project details
- **Featured Projects** — Highlights my best work with star indicators at the top of the dropdown
- **Responsive Design** — Mobile-friendly hamburger navigation and adaptive layouts
- **Project Information** — Displays descriptions, technologies, live links, and GitHub repositories
- **Certifications** — Dedicated section for education and accomplishments
- **Resume** — Separate page for detailed resume information
- **Custom Dropdown Component** — Fully styled, keyboard-accessible dropdown menu

## Project Structure

```
portfolio-2026/
├── index.html              # Main landing page
├── css/
│   ├── styles.css         # Global styles
│   ├── components.css     # Header, footer, navigation
│   ├── hamburger.css      # Mobile menu styles
│   └── projects.css       # Projects page styling
├── js/
│   ├── index.js          # Main page interactivity
│   ├── projects.js       # Dynamic project rendering
│   ├── resume.js         # Resume page logic
│   └── hamburger.js      # Mobile menu toggle
├── pages/
│   ├── projects/         # Projects page
│   └── resume/           # Resume page
├── assets/
│   ├── data/
│   │   ├── projects.json # Project data
│   │   └── certs.json    # Certifications data
│   ├── img/              # Images
│   ├── svg/              # SVG icons and graphics
│   ├── mp4/              # Video files
│   └── fonts/            # Custom fonts
```

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (CSS variables), responsive design, flexbox
- **JavaScript** — Async/await, DOM manipulation, event listeners
- **JSON** — Data storage for projects and certifications

## Key Features Explained

### Dynamic Projects
Projects are loaded from `assets/data/projects.json` and displayed via a custom dropdown menu. Featured projects appear first.

The sorting algorithm in `projects.js`:
- Featured projects (★) display at the top
- Non-featured projects follow in their original order
- Clicking a project displays its full details below

### Mobile Responsive
- Hamburger menu appears on screens ≤ 768px
- Adaptive layouts for different screen sizes
- Touch-friendly navigation

### Data Management
Update project or certification information by editing:
- `assets/data/projects.json` — Project details
- `assets/data/certs.json` — Certifications

## License

© 2026 Jonathan Scott. All rights reserved.

## Contact

- GitHub: [Hatonjan](https://github.com/Hatonjan)
- LinkedIn: [jonathan-sc0tt](https://linkedin.com/in/jonathan-sc0tt)
- Email: jonathan@mjscott.dev
