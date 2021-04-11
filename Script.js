const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

hamburger.addEventListener("click", () => {
  
        navlinks.classList.toggle("show")
        hamburger.classList.remove("fa-bars")
        hamburger.classList.add("fa-times")
})