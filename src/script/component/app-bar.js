class AppBar extends HTMLElement {

   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
         <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Aplikasi Ramalan Cuaca</span>
         </nav>   
      `;
   }
}

customElements.define("app-bar", AppBar);