window.MathJax = {
            tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
            }
        };

        // Configure Marked to use Highlight.js for code blocks
        marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        }
        });

        // Fetch the POST.md file in the same directory and render it
        fetch('POST.md')
        .then(response => response.text())
        .then(markdownText => {
            document.getElementById('content').innerHTML = marked.parse(markdownText);

            // Trigger syntax highlighting on all <pre><code> blocks
            hljs.highlightAll();
            
            // Trigger MathJax to render LaTeX equations after Markdown loads
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise();
    }
        })
        .catch(err => {
            document.getElementById('content').innerHTML = '<p>Error loading article.</p>';
            console.error(err);
        });