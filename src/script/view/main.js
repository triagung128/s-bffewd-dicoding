import "../component/city-item.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
   const searchElement = document.querySelector("search-bar");
   const cityItem = document.querySelector("city-item");

   const onButtonSearchClicked = () => {
      DataSource.searchCity(searchElement.value)
         .then(renderResult)
         .catch(errorResult);
   }

   const renderResult = result => {
      cityItem.city = result;
   }

   const errorResult = message => {
      cityItem.renderError(message);
   }

   searchElement.clickEvent = onButtonSearchClicked;
};

export default main;