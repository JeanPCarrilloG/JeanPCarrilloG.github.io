/*Etiqueta*/
class PublicacionInicio extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    var identificador = this.getAttribute("identificador");
    var titulo = this.getAttribute("titulo");
    var imagen = this.getAttribute("imagen");
    var introduccion = this.getAttribute("introduccion");
    var url_publicacion = this.getAttribute("url_publicacion");
    /*---------*/
    var elementoHtml = document.createElement(identificador);
    elementoHtml.innerHTML = `
      <div class="card mb-3 border border-dark border-3">
      <div class="px-3 pt-2 border-bottom border-dark border-5 color2 letraF">
        <p class="text-capitalize"><b>${titulo}</b></p>
      </div>
      <div class="card-body">
    
        <div class="container px-4">
          <img src="${imagen}" class="img-fluid">
        </div>
    
        <p class="card-text introduccion pt-1">${introduccion}</p>
        <a href="${url_publicacion}"
          class="btn color1 border-dark border-3 letraF btn-outline focus-ring focus-ring-dark">Leer
          Publicación</a>
      </div>
      </div>
      `;
    this.appendChild(elementoHtml);
  }
}
customElements.define('publicacion-inicio', PublicacionInicio);

/*Etiqueta*/
class ArticuloRelacionado extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    var identificador = this.getAttribute("identificador");
    var fuente = this.getAttribute("fuente");
    var logo = this.getAttribute("logo");
    var imagen_fuente = this.getAttribute("imagen_fuente");
    var titulo = this.getAttribute("titulo");
    var lectura_rapida = this.getAttribute("lectura_rapida");
    var boton_lectura_rapida = "Lectura Rápida"
    /*---------*/


    if (lectura_rapida == "si") {

      lectura_rapida = ``;

    } else {

      lectura_rapida = `disabled disabled-link`;
      boton_lectura_rapida = `Sin Lectura Rápida`;

    }

    var elementoHtml = document.createElement(identificador);
    elementoHtml.innerHTML = `

        <a href="${fuente}"class="btn color0 border-dark border-3 letraF btn-outline focus-ring focus-ring-dark mt-3" data-bs-toggle="modal" data-bs-target="#${identificador}">
        <div class="row align-items-center">
          <div class="columna_articulos">
            <div class="row justify-content-center">
              <div class="columna_articulos">
                <img src="${logo}" width="100%" height="100%" class="align-items-center pb-2">
              </div>
            </div>
            <div class="row">
              <img src="${imagen_fuente}" width="100%" height="100%">
            </div>
          </div>
          <div class="columna_articulos pt-2">
            <h6 class="text-capitalize text-start align-self-center separación_silabica">${titulo}</h6>
          </div>
        </div>
      </a>
      
      <div class="modal fade" id="${identificador}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header color1 border-dark border-3 letraF">
      
              <h4 class="text-capitalize text-start align-self-center separación_silabica"><b>${titulo}</b></h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body align-self-center ">
              <img src="${imagen_fuente}" width="100%" height="100%">
            </div>
            <div class="modal-footer justify-content-center color0">
            <div class="row">
            <div class="col">
              <img src="${logo}" width="100%" height="100%" class=" pb-2">
            </div>
              <div class="col">
              <div class="row me-2">
              <a href="${fuente}" class="btn color2 border-dark border-3 letraF btn-outline focus-ring focus-ring-dark"><b>Ir
                  a la
                  fuente externa</b></a>
              </div>
      
              <div class="row mt-1 me-2">
              <a href="https://jeanpcarrillog.github.io/Lectura/Articulos.html?${fuente}#lectura" class="btn color1 border-dark border-3 letraF btn-outline focus-ring focus-ring-dark ${lectura_rapida}"  ><b>${boton_lectura_rapida}</b></a>
              </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
      `;
    this.appendChild(elementoHtml);
  }
}
customElements.define('articulo-relacionado', ArticuloRelacionado);


/*Etiqueta*/
class LecturaRapida extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    var identificador = this.getAttribute("identificador");
    /*---------*/
    var enlace = window.location.href.split("?");
    var elementoHtml = document.createElement(identificador);

    const botonFuente = document.getElementById("boton-fuente");

    if (enlace.length == 1) {

      elementoHtml.innerHTML = `<object width="100%" height="1000em"></object>`;
      botonFuente.setAttribute("href", "#");

    } else if (enlace.length == 2) {

      var fuente = enlace[1].split("#");
      var url_publicacion = fuente[0];

      elementoHtml.innerHTML = `<object width="100%" height="1000em" data="${url_publicacion}"></object>`;
      botonFuente.setAttribute("href", url_publicacion);

    } else {

      elementoHtml.innerHTML = `<object width="100%" height="1000em"></object>`;
      botonFuente.setAttribute("href", "#");

    }

    this.appendChild(elementoHtml);
    
  }
}
customElements.define('lectura-rapida', LecturaRapida);
