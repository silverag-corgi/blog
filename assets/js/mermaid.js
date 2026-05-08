import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

const convertFencedMermaidBlocks = () => {
  const blocks = document.querySelectorAll("code.language-mermaid");

  blocks.forEach((block) => {
    const container = block.closest(".highlighter-rouge, .highlight, pre");

    const diagram = document.createElement("pre");
    diagram.className = "mermaid";
    diagram.textContent = block.textContent.trim();

    if (container) {
      container.replaceWith(diagram);
      return;
    }

    block.replaceWith(diagram);
  });
};

const initializeMermaid = async () => {
  convertFencedMermaidBlocks();

  mermaid.initialize({
    startOnLoad: false,
    theme: "default",
  });

  await mermaid.run({
    querySelector: ".mermaid",
    suppressErrors: false,
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeMermaid();
  });
} else {
  initializeMermaid();
}
