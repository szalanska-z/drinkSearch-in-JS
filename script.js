const input = document.querySelector(".search");
const liItems = [...document.querySelectorAll("li")];

const searchDrinks = (e) => {
  const text = e.target.value.toLowerCase();
  console.log(text);

  liItems.forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

input.addEventListener("keyup", searchDrinks);
