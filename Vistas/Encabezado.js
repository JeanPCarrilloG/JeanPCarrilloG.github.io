function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'es' },
    'google_translate_element'
  );
}

function CopiarUrl() {
  var enlace = document.createElement("input");
  enlace.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
  document.body.appendChild(enlace);
  enlace.select();
  const source = document.querySelector("input");
  //source.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
  //source.addEventListener("copy");
  //console.log(source);
  document.execCommand("copy");
  document.body.removeChild(enlace);
  var css = document.createElement("style");
  var estilo = document.createTextNode("#aviso {position:fixed; z-index: 9999999; widht: 120px; top:6.9em;left:15em;margin-left: -60px;padding: 19.5px; background: white;border-radius: 0.375rem;font-size: 14px;font-family: sans-serif;}");
  css.appendChild(estilo);
  document.head.appendChild(css);
  var aviso = document.createElement("div");
  aviso.setAttribute("id", "aviso");
  var contenido = document.createTextNode("URL Copiada");
  aviso.appendChild(contenido);
  document.body.appendChild(aviso);
  window.load = setTimeout("document.body.removeChild(aviso)", 2000);
}


/*https://www.facebook.com/reel/1018221699429773*/
/*Etiqueta*/
class Encabezado extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    const identificador = this.getAttribute("identificador");
    /*---------<nav class="navbar fixed-top navbar-dark bg-dark p-3 rounded-pill">*/
    const elementoHtml = document.createElement(identificador);
    elementoHtml.innerHTML = `

    <div class="row sticky-top">
    <nav class="navbar navbar-dark bg-dark p-3 rounded-pill">
      <div class="container-fluid">
  
        <a class="navbar-brand" href="file:///home/redes/Desarrollo/Github/JeanPCarrilloG.github.io/index.html?#">
          <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-blog.png" alt=""
            width="36" height="30" class="d-inline-block align-text-top">
          Blog
        </a>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
  
            <a class="navbar-brand" href="https://jeanpcarrillog.github.io/">
              <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-blog.png" alt=""
                width="36" height="30" class="d-inline-block align-text-top">
              Blog
            </a>
  
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
  
          <div class="offcanvas-body">
  
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
  
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                  href="./index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"
                  href="">Publicaciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"
                  href="">Artículos</a>
              </li>
  
            </ul>

          </div>
        </div>
  
      </div>
    </nav>
  
    <div class="px-3 py-1">
  
      <div class="btn-group dropend">
  
        <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
          <img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-traductor-google.png"
            alt="" width="36" height="30">
        </button>
        <ul class="dropdown-menu px-2">
          <div id="google_translate_element"></div>
        </ul>
  
      </div>
  
      <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
      data-bs-content="Compartir Enlace">
      <a class="btn" onclick="window.location.href='Javascript:CopiarUrl()'">
        <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-compartir.png" alt=""
          width="36" height="30" class="d-inline-block">
      </a>
      </span>

  
    </div>
  </div>
        `;
    this.appendChild(elementoHtml);
  }
}
customElements.define('encabezado-de-pagina', Encabezado);
