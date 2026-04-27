const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const scrollElement = document.querySelector("#scroll-container");

new bootstrap.ScrollSpy(document.querySelector("#scroll-container"), {
  target: "#main-nav",
  offset: 100,
});
