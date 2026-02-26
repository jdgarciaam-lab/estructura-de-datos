const btn = document.getElementById("themeßtn");
btn.addEventListener("click", () => {
document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {
btn.textContent = "Modo claro";
} else {
btn.textContent = "Modo oscuro";
}
});