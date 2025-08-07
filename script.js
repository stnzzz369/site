document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typed-text");
  elements.forEach((el, index) => {
    const text = el.dataset.text || el.textContent;
    el.textContent = "";
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          el.textContent += text[i++];
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, index * 300);
  });
});
