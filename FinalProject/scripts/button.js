function toggleMenu(){
    document.getElementById("menuNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const X = document.getElementById('hamburgerBtn');
X.onclick = toggleMenu;



function redirectToPage() {
    window.location.href = "https://acponton.github.io/wdd230/FinalProject/fresh.html";
}