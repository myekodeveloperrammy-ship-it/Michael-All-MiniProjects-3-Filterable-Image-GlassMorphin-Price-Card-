const filterContainer = document.querySelector(".filter-container");
const filterBtns = document.querySelectorAll("ul li");
const totalFilterBtn = filterBtns.length;

const shopCart = document.querySelectorAll(".images-list .image");
const totalShopCart = shopCart.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    for (let k = 0; k < totalShopCart; k++) {
      if (filterValue === shopCart[k].getAttribute("data-category")) {
        shopCart[k].classList.remove("hide");
        shopCart[k].classList.add("show");
      } else {
        shopCart[k].classList.add("hide");
        shopCart[k].classList.remove("show");
      }
      if (filterValue === "all") {
        shopCart[k].classList.remove("hide");
        shopCart[k].classList.add("show");
      }
    }
  });
}
