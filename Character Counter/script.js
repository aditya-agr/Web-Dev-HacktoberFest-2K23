let text = document.getElementById("text");
text.addEventListener("input", () => {
    let count = (text.value).length;
    document.getElementById("result").textContent = `Total Characters: ${count}`;
})