export function initializeToggle(buttonId, textId) {
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  text.style.display = "none";

  button.addEventListener("click", () => {
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}
