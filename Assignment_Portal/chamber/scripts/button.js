function toggleMenu(){
    document.querySelector('#menuNav').classList.toggle("open");
    document.querySelector('#hamburgerBtn').classList.toggle("open");
}
const hBtn = document.querySelector('#hamburgerBtn');
hBtn.onclick = toggleMenu;