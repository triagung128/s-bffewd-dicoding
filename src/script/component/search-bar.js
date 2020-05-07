class SearchBar extends HTMLElement {

   connectedCallback() {
      this.render();
   }

   set clickEvent(event) {
      this._clickEvent = event;
      this.render();
   }

   get value() {
      return this.querySelector("#input-search").value;
   }

   render() {
      this.innerHTML = `
         <div id="search-bar" class="row">
            <div class="col-md-8 offset-md-2">
               <div class="input-group">
                  <input id="input-search" type="search" class="form-control" placeholder="Masukan nama kota">
                  <div class="input-group-append">
                     <button id="button-search" class="btn btn-outline-secondary" type="button">Cari</button>
                  </div>
               </div>
            </div>
         </div>
      `;

      this.querySelector("#button-search").addEventListener("click", this._clickEvent);
   }
}

customElements.define("search-bar", SearchBar);