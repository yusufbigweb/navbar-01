const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById('closeBtn');
const navbar = document.getElementById("navbar");
function openMenu() {
  navbar.style.cssText = "background-color: black; height: 100vh;";

  const ul = document.querySelector("ul");
  ul.style.cssText =

    "display: flex; flex-direction: column; align-items: center;";

  openBtn.style.display = "none";
}
closeBtn.addEventListener('click', ()=>{
    navbar.style.cssText='height: 0px; transition: all 1s ease-in;';
    openBtn.style.display="block";
    location.reload()
})

openBtn.addEventListener("click", openMenu);
