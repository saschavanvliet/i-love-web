// import MarkdownIt from "markdown-it";
// export let data;
// let contents = "";
// const md = new MarkdownIt({
//     html: true,
// });

// //markdown omzetten naar html
// constents = data.markdownfiles.map(file => ({
//     filename: file.filename,
//     content: md.render(file.content)
// }));

import MarkdownIt from "markdown-it";

document.addEventListener("DOMContentLoaded", async function () {
    // Initialiseer Markdown-It
    const md = window.markdownit();

    // Haal het markdown-bestand op (bijvoorbeeld "content.md" in de root)
    try {
      const response = await fetch('/Learning-journal.md'); // Pad naar je .md bestand
      const markdownText = await response.text();

      // Converteer naar HTML
      document.getElementById("markdown-output").innerHTML = md.render(markdownText);
    } catch (error) {
      console.error("Fout bij ophalen Markdown bestand:", error);
    }
  });