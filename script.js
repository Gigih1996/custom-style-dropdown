const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");


// array of some city
let countries = ["Jakarta Selatan", "Jakarta Pusat", "Jakarta Timur","Depok", "Kota Tangerang", "Tangerang Selatan", "Kab.Tangerang"];

function addCountry(selectedCountry){
    options.innerHTML = "";
   countries.forEach(country => {
     // if selected country and country value is same then add selected class
     let isSelected = country == selectedCountry ? "selected" : "";

     //adding each country inside li and inserting all li inside
     let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`
     options.insertAdjacentHTML("beforeend", li);
   })
}
addCountry();

function updateName(selectedLi){
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchedVal = searchInp.value.toLowerCase();
   // returnig all countries from array which are start with user search
   // and mappping returned country with li and joining them
  arr = countries.filter(data => {
    return data.toLocaleLowerCase().startsWith(searchedVal);
  }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
  options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
})

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
})