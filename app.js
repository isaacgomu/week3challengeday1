const elements = document.querySelectorAll("input, button, textarea, a");
const button = document.getElementById("button1");
const button2 = document.getElementById("button2");

elements.forEach(function (element) {
  element.addEventListener("focus", (e) => {
    console.log(`Element ${e.currentTarget} is focused`);
  });
});

button.addEventListener("click", () => {
  console.log("Button clicked");
});

button2.addEventListener("click", () => {
  console.log("Button clicked");
});
