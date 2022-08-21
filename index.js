const foodOptInToggler = document.querySelector("#food-opt-in");
const foodOptions = document.querySelector("#food-options");

let count = 0;

foodOptInToggler.addEventListener('change', () => {
  foodOptions.classList.toggle("invisible")
  count++
  let result = "";
  count % 2 === 1 ? result = "They want food" : result = "They changed their mind";
  console.log(result)
})

// for some reason it takes a couple of seconds for the toggler to start actually revealing the food options form. Have to look into that.
