const title = document.querySelector("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", sayHello)

function sayHello() {
  btn.innerHTML = `Hello there!`
}

