const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const emptyValue = inputEl.value.trim();
  if (emptyValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = emptyValue;
  }
});
