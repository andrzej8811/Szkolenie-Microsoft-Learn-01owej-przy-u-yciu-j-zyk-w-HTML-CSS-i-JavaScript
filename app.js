//przełaczenie w tryb ścisły
"use strict";

//tworzenie odwołania do przycisku
const switcher = document.querySelector(".btn");

//obsługa zdarzenia dla click
switcher.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  //dodanie if aby zmienic wyglad przycisku po kazdorazowej akcji
  const className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }

  //dodawanie wywolania metody console.log w instrukcji if, ale wewnatrz odbiornika zdarzeń
  //daje to mozliwośc ustawienia informacji o stanie strony w narzedziach developerskich przegladarki w zakładce consola!
  console.log("current class name: " + className);
});
