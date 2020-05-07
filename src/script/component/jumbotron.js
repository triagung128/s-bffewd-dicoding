class Jumbotron extends HTMLElement {

   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
         <div class="jumbotron jumbotron-fluid img-fluid">
            <div class="container">
               <h1 class="display-4">Cek cuaca di kotamu sebelum beraktivitas</h1>
               <p class="lead">Silahkan masukan nama kota mu di kolom pencarian</p>
            </div>
         </div>
      `;
   }
}

customElements.define("jumbo-tron", Jumbotron);