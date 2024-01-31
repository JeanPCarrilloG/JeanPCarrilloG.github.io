/*Etiqueta*/
class PieDePagina extends HTMLElement{
    constructor() {
        super();
        /*Atributos*/
        const identificador = this.getAttribute("identificador");
        /*---------*/
        const elementoHtml = document.createElement(identificador);
        elementoHtml.innerHTML = `
        <div class="text-center pb-3">
        <a href="https://www.facebook.com/jeanpcarrillog/"><img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-facebook.png" /></a>
        <a href="https://twitter.com/JeanPCarrilloG"><img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-x.png" /></a>
        <a href="https://www.instagram.com/jeanpcarrillog/"><img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-instagram.png" /></a>
        </div>
  
        <div class="container-fluid px-5 ">
        <h6 class="text-end letraF"><b>Elaborado por:</b></h6>
        <h6 class="text-end por letraF">Jean Paul Carrillo Galindo</h6>
        </div
        `;
        this.appendChild(elementoHtml);
    }
}
customElements.define('pie-de-pagina', PieDePagina);