class DataSource {

   static searchCity(keyword) {
      const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
      const apiKey = "7d7e308d09a8513c46b1d40c7cb3cc81"

      return fetch(`${baseUrl}?q=${keyword}&appid=${apiKey}`)
         .then(response => {
            return response.json();
         })
         .then(responseJSON => {
            if (responseJSON.cod === 200) {
               return Promise.resolve(responseJSON);
            } else if (responseJSON.cod === "404") {
               return Promise.reject(`Kota ${keyword} tidak ditemukan!`);
            } else if (responseJSON.cod === "400") {
               return Promise.reject(`Anda belum memasukkan nama kota!`);
            }
         });
   }
}

export default DataSource;