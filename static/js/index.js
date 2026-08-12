function copyBibTeX() {
  const bibtexElement = document.getElementById("bibtex-code");
  const button = document.querySelector(".copy-bibtex-btn");
  const copyText = button ? button.querySelector(".copy-text") : null;

  if (!bibtexElement || !button || !copyText) {
    return;
  }

  const text = bibtexElement.textContent;

  function showCopied() {
    button.classList.add("copied");
    copyText.textContent = "Copied";

    window.setTimeout(function () {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 1800);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(function () {
      fallbackCopy(text);
      showCopied();
    });
  } else {
    fallbackCopy(text);
    showCopied();
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", function () {
  const scrollButton = document.querySelector(".scroll-to-top");

  if (!scrollButton) {
    return;
  }

  if (window.scrollY > 420) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
});
