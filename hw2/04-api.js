/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

// Add your code here

const populateList = (json) => {
  let list  = document.getElementById("results");

  json.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = item.name.common + " - " +  item.population.toLocaleString('en');
    list.appendChild(listItem);
  });
}

const sortJson = (json) => {
  json.sort(function (a, b) {
  return a.name.common.localeCompare(b.name.common);
  });

  populateList(json);

}

const getData = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(json => sortJson(json));
}

getData(url);
