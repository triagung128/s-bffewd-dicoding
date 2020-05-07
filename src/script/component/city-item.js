import moment from "moment";

class CityItem extends HTMLElement {

   set city(city) {
      this._city = city;
      this.render();
   }

   render() {
      moment.locale("ID");
      this.innerHTML = `
         <div id="city-list" class="row">
            <div class="col-md-8 offset-md-2 mt-5 mb-5">
               <div class="card">
                  <div class="card-body">
                     <div class="row">
                        <div class="col-md-12">
                           <h2 class="">Cuaca di ${this._city.name}, ${this._city.sys.country}</h2>
                           <h5>${moment().format("LLLL")}</h5>
                           <h6>Update: ${moment.unix(this._city.dt).format('LT')}</h6>
                        </div>
                        <div class="col-md-12 mb-3">
                           <div class="text-center">
                              <img src="http://openweathermap.org/img/wn/${this._city.weather[0].icon}@2x.png" alt="">
                           </div>
                           <h2 class="text-center font-weight-bold">${(this._city.main.temp - 273.15).toFixed(0)} &deg;C</h2>
                           <h4 class="text-center">${this._city.weather[0].main}</h4>
                        </div>
                        <div class="col-md-8 offset-md-2">
                           <table class="table table-bordered">
                              <tr>
                                 <th>Suhu Tinggi</th>
                                 <td>${(this._city.main.temp_max - 273.15).toFixed(0)} &deg;C</td>
                              </tr>
                              <tr>
                                 <th>Suhu Rendah</th>
                                 <td>${(this._city.main.temp_min - 273.15).toFixed(0)} &deg;C</td>
                              </tr>
                              <tr>
                                 <th>Tekanan</th>
                                 <td>${this._city.main.pressure} hpa</td>
                              </tr>
                              <tr>
                                 <th>Kelembapan</th>
                                 <td>${this._city.main.humidity} %</td>
                              </tr>
                              <tr>
                                 <th>Matahari Terbit</th>
                                 <td>${moment.unix(this._city.sys.sunrise).format('LT')}</td>
                              </tr>
                              <tr>
                                 <th>Matahari Terbenam</th>
                                 <td>${moment.unix(this._city.sys.sunset).format('LT')}</td>
                              </tr>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      `;
   }

   renderError(message) {
      this.innerHTML = `
         <div id="city-list" class="row">
            <div class="col-md-8 offset-md-2 mt-5 mb-5">
               <div class="card">
                  <div class="card-body">
                     <h3 class="text-center">${message}</h3>
                  </div>
               </div>
            </div>
         </div>
      `;
   }
}

customElements.define("city-item", CityItem);